import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { routerPost } from "./post/PostRouter.js";

const PORT = 5000;
const DB_URL = "mongodb+srv://user:user@cluster0.ponae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(express.static('static'));
app.use('/api', routerPost);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("Server started on port " + PORT));
    } catch (error) {
        console.log(error);   
    }
}

startApp();