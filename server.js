const express = require('express');
const axios = require('axios');
const bodyparser = require('body-parser');

const app = express();

let cats = [];

// Express middleware
app.use(bodyparser.json());

const rootGet = (request, response) => response.send("OVO i dsadadalje RADI");

app.get("/", rootGet);

app.get("/kamp", (request, response) => {
    response.send("rdtyhjkl;jhgfdghjkljhgfuhjk");
});

app.get("/cats", async (request, response) => {
    try {
        const result = await axios.get('https://cat-fact.herokuapp.com/facts');
        response.send(result.data);
    } 
    catch (e) {
        console.log(e);
        response.sendStatus(500);
    }
});

app.post("/cats", (req, res) => {
    const cat = req.body.cat;
    console.log(cat);
    cats.push(cat);
    res.sendStatus(201);
});

app.get("/cats/nase", (req, res) => {
    res.send({ cats });
});

const port = 3000;

app.listen(port, console.log(`Listening on port: ${port}`))