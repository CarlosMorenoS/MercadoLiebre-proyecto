const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static("public"));

/*Routes */

app.get("/", (req,res)=>{
res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.listen(PORT,()=> console.log(`servidor corriendo en ${PORT} 
http://localhost:${PORT}`))














