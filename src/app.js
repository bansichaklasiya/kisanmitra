const express = require('express');
const path = require("path");
require("./database/conn");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);


app.get("/",(req,resp)=>{
    resp.render('index');
})

app.get("/contact",(req,resp)=>{
    resp.render('contact');
})



app.listen(port,()=>{
    console.log(`sever is running at port no ${port}`);
})