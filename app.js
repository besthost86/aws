import express from "express";

const app = express();

app.use("/", (req, res) => res.json({message: "you did it"}));

app.listen(process.env.PORT || 5001, ()=> console.log("listening..."));