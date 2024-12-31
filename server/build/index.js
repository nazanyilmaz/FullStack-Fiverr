import express from "express";
import mongoose from "mongoose";
//Connect to DB
mongoose
    .connect("mongodb://localhost:27017/fiverrDB")
    .then(() => console.log("🥳🥳DataBase is connection success"))
    .catch((err) => console.log("😔DataBase is not connection", err));
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to my SERVER!");
});
app.listen(port, () => {
    console.log(`🔥 Server is running on port ${port} 🔥 🥂`);
});
