import express from "express";

const app = express();

app.use("/", (req, res) => res.json({message: "you did it"}));
app.use("/api", (req, res) => res.json({message: "this is your api"}));

app.listen(8080, ()=> console.log("listening..."));