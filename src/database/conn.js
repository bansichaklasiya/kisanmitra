const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/kisanmitra",{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful");
}).catch((error)=>{
    console.log(error);
})