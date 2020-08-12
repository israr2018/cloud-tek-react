const express=require('express');
const path=require('path');
const app=express();
// app.use(express.static(path.join(__dirname+'/dist/mcza6')));
app.use(express.static('../build'));
const port=process.env.PORT||8080;
//app.use(cors({credentials: true, origin: true}));
app.get('/*',function(req,res){

  res.sendFile('../build/index.html');
});

// app.get('/',function(req,res) {
//     res.send("Welcome to the strip apis ");
// });
app.listen(port,function () {
    console.log("strip  restfull api are running on port:"+port);

});