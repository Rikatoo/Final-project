var express = require('express');
var router = express.Router();
var halp = require("../halp.js");


router.post('/', function (req, res, next) {
    var x = req.body.mine;
    var y= {};
    switch (x) {
        case "mine":
            var t = JSON.stringify(halp.users[0].startUpgradingStructures);
            y.maikamu = t;
            console.log(y);
            res.json({junktion:y});
            break;
        case "refinery":
            structurelvl = this.structures.refinery;
            break;
        case "farm":
            structurelvl = this.structures.farm;
            break;
        case "livingQ":
            structurelvl = this.structures.livingQ;
            break;
        case "storage":
            structurelvl = this.structures.storage;
            break;
        case "barracks":
            structurelvl = this.structures.barracks;
            break;
        case "range":
            structurelvl = this.structures.range;
            break;
        case "machinery":
            structurelvl = this.structures.machinery;
            break;
        case "research":
            structurelvl = this.structures.research;
            break;
        case "specResearch":
            structurelvl = this.structures.specResearch;
            break;
        case "wall":
            structurelvl = this.structures.wall;
            break;
    }
    console.log("wtf");
    // res.json(halp.users);
});
module.exports = router;