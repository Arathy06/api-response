
const e = require('express');
var express = require('express')

var app = express()

app.get("/",(req,res)=>{

    res.send("Welcome to my website")
})

app.get("/contact",(req,res)=>{

    res.send("Welcome to my contact page")
})


app.get("/home",(req,res)=>{

    res.send("Welcome to my home page")
})

app.get("/gallery",(req,res)=>{

    res.send("Here is my gallery")
})

app.get("/profile",(req,res)=>{

    res.send("My profile page")
})


app.listen(process.env.PORT || 3000,(error)=>{
    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }

});