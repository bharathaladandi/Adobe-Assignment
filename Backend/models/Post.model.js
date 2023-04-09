const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

    content:{ type:String, required: true },
    userID:{ type:String },
    created_at :{ type: Date, default: Date.now },
    updated_at :{ type: Date.now }

},
{
    versionKey: false,
    timestamps: true,
})


const Post = mongoose.model("post", postSchema);

module.exports = { Post };