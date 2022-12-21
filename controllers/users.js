const userModel = require("../model/userModel");
var userProfile = (req,res) => {
    console.log(req.files)
    res.json({message:'uploaded'});
}

const createUser = async function (req, res) {
    try {
        let requestBody = req.body
        let userSaved = await userModel.create(requestBody);
        res.status(201).send({ status: true, message: "user successfully created", data: userSaved });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};

module.exports = { userProfile , createUser }