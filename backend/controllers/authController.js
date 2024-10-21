const User = require("../models/User");
const Role = require("../models/Role");
const createToken = require('../middlewares/createToken')
class authController{
    static addAdmin = async (req, res) => {
        try {
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ success: false, message: "Email already exists" });
            }
    
            const adminRole = await Role.findOne({ name: "admin" }); // Assuming Role model exists and has a field named 'name'
            if (!adminRole) {
                return res.status(500).json({ success: false, message: "Admin role not found" });
            }
    
            const newAdmin = await User.insertMany({ email, password, role: adminRole._id });
    
            return res.status(201).json({ success: true, message: "Admin added successfully" });
        } catch (error) {
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }


    static signUpUser = async (req, res) => {
        try {
            const { name, email, password, role } = req.body;
            console.log(req.body);
            // if (role.toLowerCase() === "admin" || role.toLowerCase() === "superadmin") {
            //     return res.status(403).json({ success: false, message: "You are not authorized for this request" });
            // }
    
            const existingRole = await Role.findOne({ name: role.toLowerCase() });
            if (!existingRole) {
                return res.status(404).json({ success: false, message: "Role not found" });
            }
    
            const newUser = await User.create({ name, email, password, role: existingRole._id });
            return res.status(201).json({ success: true, message: "Account created successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }

    static loginUser = async (req, res) => {
        try {
            const {email, password} = req.body;
            const data = await User.findOne({email, password}).populate('role');
            console.log(data);
            if(!data) {
                return res.status(404).json({success : false, message : "User Not Found"});
            }
            const payload = {email: data.email, role : data.role.name}
            const token = createToken(payload);
            console.log(token);
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600000
            });
    
            return res.status(200).json({success : true, message :"User Logged in successfully", token});
        } catch (error) {
            console.log(error);
            return res.status(500).json({success : false, message :"Internal Server Error"});
        }
    }

}

module.exports = authController;