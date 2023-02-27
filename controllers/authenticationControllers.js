const bcrypt = require("bcrypt");
const authentificationModels = require("../models/authenticationModels.js")
const register = async (req,res) => {
    
    const {firstName,lastName,email,type,userName,password} = req.body;
    
    try {
        const salt = await bcrypt.genSalt();
        console.log(salt)
        const hashedPassword = await bcrypt.hash(password, salt);

        const register =  await authentificationModels.registerInfo(firstName,lastName,email,type,userName,hashedPassword)
        res.send(register);
    }catch {
        res.status(400).send({message: "error"})
    }
}


const checkLogin = async (req,res) => {
    const {userName, password} = req.body;
    const nameExist = await authentificationModels.loginInfo(userName)
    
    if (nameExist.length < 1) res.status(400).json({message: "Cannot find User"});
    else {
        const user = nameExist[0];
        const passCheck = await bcrypt.compare(password, user.password);
        if(!passCheck) res.status(400).json({message:"Password is incorrect"});
        else res.status(200).json(nameExist)
    } 
}

module.exports = {
    checkLogin,
    register
}