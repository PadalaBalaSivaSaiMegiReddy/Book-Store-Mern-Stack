import express from "express"
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js";
import bookRouter from "./routes/booksRoute.js";
const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Successfully running on the server")
})

app.use("/books", bookRouter);

mongoose.connect(MONGO_URL).then(()=>{
    console.log("Successfully connected to MongoDB")
    app.listen(PORT, () => {
			console.log(`App is running on the server on port ${PORT}`);
		});
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err)
})

