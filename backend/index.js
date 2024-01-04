import express from "express"
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js";
const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Successfully running on the server")
})

app.post("/books",async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).send({message:"Please fill all the fields"})
        }
        else{
            const newBook={
                title:req.body.title,
                author:req.body.author,
                publishYear:req.body.publishYear
            }
            const book = new Book(newBook)
            return res.status(201).send(book);
        }

    }catch(error){
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

mongoose.connect(MONGO_URL).then(()=>{
    console.log("Successfully connected to MongoDB")
    app.listen(PORT, () => {
			console.log(`App is running on the server on port ${PORT}`);
		});
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err)
})

