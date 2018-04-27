var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();

var bears = [
    { id: "15642", name: "Bear1" },
    { id: "54845", name: "Bear2" }
];

app.use(cors());

router.route('/bears')
    .get(function (req, res) {
        res.json(bears);
    })
    .post(function(req, res) {
        var bear = {};
        bear.name = req.body.name;
        bear.id = Math.round((Math.random() * 65535)).toString();
        bears.push(bear);
        res.json({ message: 'Bear created!' });
    });

router.route('/bears/:id')
    .delete(function(req, res) {
        bears = bears.filter( (bear) => bear.id !== req.params.id );
        res.json({ message: 'Bear deleted!' });
    });

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);
app.listen(8000);