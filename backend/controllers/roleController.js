const Role = require("../models/Role");

class roleController {
    static addRole = async (req, res) => {
        const { name, authority_level } = req.body;
        try {
            const newRole = await Role.insertMany({name, authority_level}) 
            console.log(newRole);
            return res.status(200).json({success : true, message : "Role added successfully"});
        } catch (error) {
            return res.status(500).json({success : false, message :"Internal Server error"});
        }
    };
}

module.exports = roleController;