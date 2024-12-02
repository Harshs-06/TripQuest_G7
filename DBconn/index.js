let express = require("express")
let app = express() ;

const fs=require('fs');
const path = require("path"); 
const cors = require('cors');
const port = 3000;

app.use(
    cors({
        origin:"*"
    })
);

app.use(express.json());
const router = require("./routes/router.js");
app.use("/tripquest/Groups",router)


let dbconnect = require("./connection/connect.js")

dbconnect()

app.get("/",(req,res)=>{
    res.send("Page Loading");
});

app.listen(port,()=>{
    console.log("server is connected");
    // console.log(`http://127.0.0.1:5100/beforeloginHome/home.html`)
})

