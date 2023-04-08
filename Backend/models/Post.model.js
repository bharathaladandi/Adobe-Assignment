const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

    title:{ type:String, required: true },
    note:{ type:String, required: true },
    category:[],
    userID:{ type:String },

},
{
    versionKey: false,
    timestamps: true,
})


const Post = mongoose.model("post", postSchema);

module.exports = { Post };