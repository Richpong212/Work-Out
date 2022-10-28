const { createWorkout,getAllWorkouts,getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workout.contoller');

const router  = require('express').Router();

// get all workouts
router.get('/', getAllWorkouts);

// get a specific workout
router.get('/:id', getWorkout);

// post a workout
router.post('/', createWorkout);

// update a workout
router.patch('/:id', updateWorkout);

// delete a workout
    router.delete('/:id', deleteWorkout);

module.exports = router;