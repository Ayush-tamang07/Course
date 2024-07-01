import express from 'express';
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(express.json()); // middle man

app.get("/", (req, res) => {
    res.send("Get Function");
})

app.post("/", (req, res) => {
    console.log(req)
    const user = req.body
    console.log(user)
    res.json(user)
})
const PORT = process.env.PORT

app.listen(PORT,(req, res)=>{
    console.log("Server is running on port 5500");
})