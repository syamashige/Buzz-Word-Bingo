const express = require('express');
const app = express();
const bparser = require('body-parser');
const PORT = process.env.PORT || 8000;

// Directory that you are currently in: 
console.log("Directory", __dirname);    // Logs: /Users/sarahyamashige/Desktop/DevLeague2018/Buzz-Word-Bingo

app.use(bparser.urlencoded({ extended: true }));

// Give express access to the files in the public folder: 
app.use(express.static('/public'))

// Create an array of the buzzword objects 
let theBuzzList = [];
console.log("Buzzlist Array", theBuzzList)

// Points Counter:
let buzzwordScore = 0;

// GET 
// Get the Buzzword array of objects 
app.get('/buzzwords', (req, res) => {
    console.log('Get the Buzzwords', theBuzzList);
    res.json(theBuzzList);
});

// POST 
// Add the new req.body into theBuzzList 
app.post('/buzzwords', (req, res) => {
    console.log('body', req.body);

    // If theBuzzList array doesn't have 5 items and the list doesn't already include the buzzword 
    if (theBuzzList.length !== 5) {         // Length won't exceed 5 items
        // Push the new req.body into theBuzzList 
        theBuzzList.push(req.body);
        console.log("The Buzz List", theBuzzList);
        res.send('{"success": true}');
    }
    else {
        res.send('{"success": false}');
    };
});

// Resets/Empties the list of buzzwords 
app.post('/reset', (req, res) => {
    theBuzzList = [];
    // *** Alternate Way *** //
    // theBuzzList.splice(0, theBuzzList.length);
    res.send('{"success": true}');
})



const server = app.listen(PORT, () => {
    console.log('IZ WORKING?');
    // console.log("process.env", process.env);
    // console.log("server", server.address().address)
    const host = server.address().address;
    console.log(`Listening at ${host} on PORT: ${PORT}`);
}); 

// let nextId = 3;
// let buzzwords = [
//     {
//         id: 1,
//         buzzword: "something",
//         points: 10
//     },
//     {
//         id: 2,
//         buzzword: "another thing",
//         points: 20
//     }
// ];

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

// app.get('/buzzword', (req, res) => {
//     res.json(buzzwords);
// });

// app.get('/buzz/:id/', (req, res) => {
//     const { id } = req.params;
//     const resData = buzzwords.filter(item => {
//         return item.id == id;
//     });

//     console.log('resData', resData);
//     res.json(resData);
// });

// app.post('/addbuzz', (req, res) => {
//     console.log('req.body', req.body);
//     let buzzObject = req.body;
//     buzzObject.id = nextId;
//     buzzwords.push(buzzObject);
//     res.redirect(`/buzz/${nextId}`);
//     nextId++;
// });


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

