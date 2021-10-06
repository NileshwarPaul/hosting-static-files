const express = require('express');
const app = express();
app.use(express.static('public')) //middleware
const prtnum = process.env.PORT || 3000
app.listen(prtnum, () => {
    console.log('Example app listening on port 3000!');
    //req.sendFile(`${__dirname}/`)
});


app.get("/",(res,req) => {
    req.sendFile(`${__dirname}/index.html`)
})

app.get("/hosting-static-files/index.html",(res,req) => {
    req.sendFile(`${__dirname}/index.html`)
})
