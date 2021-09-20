const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter an exercise type"
            },

            name: {
                type: String,
                trim: true,
                required: "Please enter an exercise name"
            },

            duration: { 
                type: Number,
                required: "Please enter an exercise duration (in minutes)"
            },

            weight: {
                type: Number,
                default: 0
            },

            reps: {
                type: Number,
                default: 0
            },

            sets: {
                type: Number,
                default: 0,
            },

            distance: {
                type: Number,
                default: 0
            }
        }
    ],
},
{
    toJSON: {
        virtuals: true
    }
});
    //  Calculation for dynamic property TOTAL DURATION
WorkoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    },0);
});

const Workout = mongoose.model("workout",WorkoutSchema);

module.exports = Workout;