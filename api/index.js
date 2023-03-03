import express from "express";

const app = express();

// //middleware
// app.use((req, res, next)=>{
//     console.log("ada request masuk");
//     next();
// })

//route
app.get("/api/hanafi",(_req,res)=>{
    res.send("Hanafi");
});

app.listen(3000,()=>{
    console.log("Server sedang berjalan!");
});
