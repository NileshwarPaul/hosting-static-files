const express = require('express');
const app = express();
app.use(express.static('public')) //middleware
app.listen(3030, () => {
    console.log('Example app listening on port 3000!');
    //req.sendFile(`${__dirname}/`)
});


app.get("/",(res,req) => {
    req.sendFile(`${__dirname}/index.html`)
})