
var MongoClient = require('mongodb').MongoClient
var express = require('express');
var moment = require('moment');
var cors = require('cors')

var app = express();
var port = process.env.PORT || 5001;
app.listen(port, function () {
    console.log('Server is running...' + port);
});
app.use(express.json())
app.use(cors())
const url = 'mongodb://localhost:27017';

app.use(function (req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/header-mongo', async function (req, res) {
        await MongoClient.connect(url,(err, client) => {
            if (err) throw err
            var message = client.db('react').collection('header');
            message.find().toArray(function (err, result) {
                if (err) throw err
                res.send(result);
                console.log(result)
            })
            client.close();
        })

});
app.get('/messages-mongo', async function (req, res) {
        await MongoClient.connect(url,(err, client) =>{
            if (err) throw err
            var message = client.db('react').collection('message');
            message.find().toArray(function (err, result) {
                if (err) throw err

                res.send(result);
                console.log(result)
            })
            client.close();

        })

});
app.post('/messages-mongo/update', function (req, res) {
        MongoClient.connect(url, (err, client) =>{
            if (err) throw err
            console.log(req.body && req.body.id)
            var message = client.db('react').collection('message');
            const query = {id: req.body && req.body.id};
            const update = {$set: {resolved: 1}, $currentDate: { lastModified: true }};
            message.updateOne(query, update).then((err, result) => {
                    if (err) throw err
                    res.send(result);
                    console.log(result)
                }
            );
            client.close();
        })

});

