const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
           name: {
            type: String
        },
        profile_pic: {
            type: String
        }
    },{ timestamps: true })

 module.exports = mongoose.model('user', userSchema) 