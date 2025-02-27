import express from 'express'

const app= express()
const PORT = 8080


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/ice-tea",(req,res)=>{
    res.send("What ice tea would you prefer!")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to HomePage")
})



app.listen(PORT,()=>{
    console.log(`Server is listening at PORT : ${PORT}`)
    
})