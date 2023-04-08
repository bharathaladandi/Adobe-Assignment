const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    email:{ type:String, required: true },
    password:{ type:String, required: true },
    name:{ type:String, required: true },
    age:{ type:String, required: true },

},
{
    versionKey: false,
    timestamps: true,
})


const User = mongoose.model("user", userSchema);

module.exports = { User };