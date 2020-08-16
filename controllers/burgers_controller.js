var app = require("express");
var router = express.Router();
var Burger = require("../models/burger");
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

// router.put("/api/burger/:id", function(req, res) {
//     var burgerID = req.params.id;
//     burger.update()
// })

module.exports = router;