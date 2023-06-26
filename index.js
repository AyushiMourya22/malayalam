const express=require("express")
const app=express()
const cors=require("cors")
require("dotenv").config()
const path=require("path")
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 5000
require("./conn")


app.use('/admin',require("./routes/admin"))
app.use('/auth',require("./routes/auth"))


app.listen(PORT,()=>console.log(`Listening at port ${PORT}`))
