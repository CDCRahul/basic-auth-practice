const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require('./routers/auth');
const role = require('./routers/role');
const app = express();

app.use(express.json())
app.use(cors())
app.use(auth);
app.use(role)


const URI = "mongodb+srv://rahulsahu79998:Lm6Q7VoSV1QmupJC@cluster0.n9pu6ke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI)
    .then(() => 
        app.listen(3000, () => console.log("App is listening on 3000"))
    )
    .catch(err => console.error('MongoDB connection error:', err));