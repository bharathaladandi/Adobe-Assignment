const express = require("express");

const { connection } = require('./config/db')

const { postRouter } = require("./routes/post.route")

const app = express();

app.use(express.json())

app.use("/notes", postRouter);


app.listen(8080, async() => {

    try {
        await connection;
        console.log("Connected to DB Successfully");
    } 
    catch (error) {
        console.log(error);
        console.log("Error connecting to DB");
    }
    console.log("Listening on PORT 8080")
})