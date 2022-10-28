const Workout = require('../models/workouts');

// get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

// get a single workout
const getWorkout = async (req, res) => {
    //const { id } = req.params;
    try {
        const workout = await Workout.findById(req.params.id);
        if(!workout){
           return res.status(404).json({ message: 'Workout not found' });
        } else{
            res.status(200).json(workout);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

// Create a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    // add a new workout to the database
    try {
        const workout = await Workout.create({
        title,
        reps,
        load,
        });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

//delete a workout  
const deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete({_id: req.params.id});
        if(!workout){
            return res.status(404).json({ message: 'Workout not found' });
        } else{
            res.status(200).json({ message: 'Workout deleted' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
}

// update a workout
const updateWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate({_id: req.params.id}, req.body);
        if(!workout){
            return res.status(404).json({ message: 'Workout not found' });
        } else{
            res.status(200).json({ message: 'Workout updated' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};


module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
}