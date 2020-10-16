// IMPORT
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// CREATE ROUTES
router.get("/", (req,res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers", (req,res) => {
    burger.insertOne([
        "burger name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], result => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req,res) => {
    let condition = `id = ${req.params.id}`;

    console.log("condition: ", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0) return res.status(404).end();
        else res.status(200).end();
    });
});

// EXPORT 
module.exports = router;