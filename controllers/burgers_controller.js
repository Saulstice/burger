var express = require("express");
var router = express.Router();

const burger = require("../models/burger");


router.get("/", function (req, res) {
    burger.all(function (data) {
        var allBurgers = {
            burgers: data
        };
        res.render("index", allBurgers);
    });
});

router.post("/api/burgers", function (req, res) {
    var name = req.body.name;
    burger.create(name, function(result) {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    var burgerID = req.params.id;
    burger.update(burgerID, function(result) {
        res.json(result);
    })
})

module.exports = router;