const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");
require("./db/corn");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const Register = require("./models/registers");

const static_path = path.join(__dirname + "/views");
app.use(express.static(static_path));
app.set("view engine","html");

app.get("/",(req,res)=>{
    res.render(static_path); 
})

app.post("/",async(req,res)=>{
    try{
    const registeruser = new Register({

        name:req.body.name,
        email:req.body.email,
        Message:req.body.Message
    })

        const registered = await registeruser.save();
        if(registered){
            res.send("successfylly sent");
        }
        else{
            res.send("not sent");
        }
        

}catch(err){
    res.status(400).send(err);
}
})


app.listen(port,()=>{
    console.log(`server is working successfully on ${port}`);
})