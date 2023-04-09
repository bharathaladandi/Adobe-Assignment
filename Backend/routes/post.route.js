const express = require("express");
const { PostModel } = require("../models/Post.model");
const postRouter = express.Router();





postRouter.get("/", async (req, res) => {
    const posts = await PostModel.find()
    res.send(posts);
})


postRouter.post("/posts", async (req, res) => {
    const payload = req.body

    try{
        const new_post = new NoteMPostModelodel(payload)
        await new_post.save()
        res.send({"msg" : "Post created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

module.exports = {postRouter};
