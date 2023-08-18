const express = require('express');
const app = express();

app.listen(3000);

app.get("/", (req,res) => {
    res.write('<h1>oi</h1>')
    console.log(req.hostname);
    console.log("Is on your server in the route / ")
})