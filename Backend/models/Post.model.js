const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

    content:{ type:String, required: true },
    userID:{ type:String },
    created_at :{ type: Date, default: Date.now },
    updated_at :{ type: Date }

},
{
    versionKey: false,
    timestamps: true,
})


const PostModel = mongoose.model("post", postSchema);

module.exports = { PostModel };