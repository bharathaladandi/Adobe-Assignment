const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name :{ type:String, required: true },
    email :{ type:String, required: true },
    password :{ type:String, required: true },
    bio :{ type:String, required: true },
    created_at :{ type: Date, default: Date.now },
    updated_at :{ type: Date.now }

},
{
    versionKey: false,
    timestamps: true,
})


const User = mongoose.model("user", userSchema);

module.exports = { User };