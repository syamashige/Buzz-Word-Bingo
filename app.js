const express = require('express');
const app = express();
const qs = require('querystring');
const bp = require('body-parser');
const PORT = process.env.PORT || 8000;



// **** Test Connection **** //
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// const server = app.listen(3000, () => {
//     const host = server.address().address;
//     const port = server.address().port;

//     console.log(`Example app listening at http://${host}:${port}`);
// });

console.log("port", PORT);
console.log("process.env", process.env)

// app.use(express.static("/public"));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
})


