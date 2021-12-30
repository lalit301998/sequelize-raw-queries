// to start the server
const express = require('express')
const app =express();
//console.log(app,'appapapapa');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
  }));
//   app.use(bodyParser.json())
const Port = 3000;
require('./models');
var userctrl = require('./controller/usercontroller')
app.get("/",(req,res)=>{
res.send("home page");
})
app.get("/add",userctrl.adduser) ;
app.get("/query",userctrl.querydata)
app.get("/finder",userctrl.finderData)
app.get("/crud",userctrl.crudOperation)
app.get("/deluser",userctrl.deluser)
app.get("/updateuser",userctrl.updateuser)
app.get("/setter-getter",userctrl.setterGetter)
app.get("/validation",userctrl.validationcnt)
app.get("/raw-query",userctrl.rawquery)
app.get("/onetone",userctrl.onetone);
app.get("/belongTo",userctrl.belongsTo)
app.get("/manytomany",userctrl.manytomany)

app.listen(Port,()=>{
console.log(`App is listening at 3000`)
})

