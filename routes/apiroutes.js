const router = require('express').Router();
const db = require("../models");

// Workouts page
//  localhost3001/api/

//  GET --  /api/workouts
router.get("/workouts", (req,res)=>{
    db.Workout.find({}).then(dbWorkout => {
        res.status(200).json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
})

//  POST    --  api/workouts  --  Submit completed workouts
router.post("/workouts",(req,res)=> {
    db.Workout.create(req.body).then((dbWorkout) => {
        res.status(200).json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// PUT  --  api/workouts -- Update Exersizes by ID
router.put("/workouts/:id",(req,res)=> {
    db.Workout.findByIdAndUpdate(
        {
            _id:req.params.id
        },
        {
            $push: {
                exercises: req.body
            }
        }
    ).then((dbWorkout)=>{
        res.status(200).json(dbWorkout);
    }).catch(err =>{
        res.status(400).json(err)
    })
})

//  STATS PAGE GET
router.get("/workouts/range", (req,res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.status(200).json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;