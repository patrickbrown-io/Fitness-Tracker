const router = require('express').Router();
const db = require("../models");

//localhost3001/api/workouts
router.get("/workouts", (req,res)=>{
    console.log("HIT");
    res.send("Hit");
});

module.exports = router;