const express = require("express")
const examRouter = require("./routes/examRoutes.js")
const db = require("./db")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/exams", examRouter)

app.listen(8000,()=> console.log("listening at port 8000"))

