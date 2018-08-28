const express = require('express');
const app = express();
const bp = require('body-parser');

app.use(bp.urlencoded({ extended: true }));

app.use(express.static('/public'))

let nextId = 3;
let buzzwords = [
    {
        id: 1,
        buzzword: "something",
        points: 10
    },
    {
        id: 2,
        buzzword: "another thing",
        points: 20
    }
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/buzzword', (req, res) => {
    res.json(buzzwords);
});

app.get('/buzz/:id/', (req, res) => {
    const { id } = req.params;
    const resData = buzzwords.filter(item => {
        return item.id == id;
    });

    console.log('resData', resData);
    res.json(resData);
});

app.post('/addbuzz', (req, res) => {
    console.log('req.body', req.body);
    let buzzObject = req.body;
    buzzObject.id = nextId;
    buzzwords.push(buzzObject);
    res.redirect(`/buzz/${nextId}`);
    nextId++;
});

app.listen(8000, () => {
    console.log('IZ WORKING?');
}); 

//**** Test Connection **** //
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// const server = app.listen(PORT, () => {
//     const host = server.address().address;
//     // const port = server.address().port;

//     console.log(`Example app listening at http://${host}:${PORT}`);
// });

// console.log("port", PORT);
// console.log("process.env", process.env)

// app.use(express.static("/public"));

// console.log("dirname", __dirname);

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

// app.use((req, res, next) => {
//     console.log(`${req.method} request at: ${req.url}`);
//     next();
// });

// app.use(bp.urlencoded({ extended: true }));

// let nextId = 3;
// let buzzwords = [
//     {
//         id: 1,
//         buzzword: "something", 
//         points: 10
//     },
//     {
//         id: 2,
//         buzzword: "something else", 
//         points: 20    
//     }
    
// ];

// // app.get('/buzzword', (req, res) => {
// //     res.json(buzzwords);
// // });

// app.get('/buzzword/:id', (req, res) => {
//     const { buzzword } = req.params;
//     const resData = buzzwords.filter(item => {
//         return item.buzzword == buzzword;
//     });
//     console.log('resData', resData);
//     res.json(resData);
// });

// console.log('buzzwords', buzzwords)


// app.post('/addbuzzword', (req, res) => {
//     console.log('req.body', req.body);

//     let buzzObject = req.body;
//     buzzObject.id = nextId;
//     buzzwords.push(buzzObject);
//     res.redirect(`/buzzword/${nextId}`);
//     nextId++;
// })


// app.listen(PORT, () => {
//     console.log('IZ WORKING?')
// })

