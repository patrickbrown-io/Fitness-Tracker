const router = require("express").Router();

    router.get("/exercise", (req,res) => {
        res.json('Hit')
        res.sendFile(path.join(__dirname, "../public/excercise.html"))
    })

    router.get("/stats", (req,res) => {
        res.json("Hit")
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    module.exports = router;