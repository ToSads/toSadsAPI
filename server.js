require('dotenv').config();
const express = require("express")
const examRouter = require("./routes/examRoutes.js")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")



app.use(express.json())
app.use(cors())

app.use("/exams", examRouter)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected"))
.catch((error)=>console.log(error))

const port = process.env.PORT || 8000;
app.listen(port,()=> console.log("listening at port:" + port))

