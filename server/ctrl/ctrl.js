let bWExercises = [("Pushups"), ("Dips"), ("Chinups"), ("Pullups"), ("Handstand Pushups"), ("Squats"), ("Starfish Crunches"), ("Burpies")];
let bWCTExercises = [("Pushups"), ("Dips"), ("Handstand Pushups"), ("Squats"), ("Starfish Crunches"), ("Burpies")];
let bWBBExercises = [("Chinups"), ("Pullups"), ("Handstand Pushups"), ("Squats"), ("Starfish Crunches"), ("Burpies")];

let wExercises = [("Bench press"), ("Skull Crushers"), ("Curls"), ("Bent Over Rows"), ("Upright Rows"), ("Weighted Squats"), ("Weighted Situps"), ("Deadlift")];
let wCTExercises = [("Bench press"), ("Skull Crushers"), ("Upright Rows"), ("Weighted Squats"), ("Weighted Situps"), ("Deadlift")];
let wBBExercises = [("Curls"), ("Bent Over Rows"), ("Upright Rows"), ("Weighted Squats"), ("Weighted Situps"), ("Deadlift")];

let exerciseList = [];

module.exports = {
    getBWE: (req, res) => {
        // Send body weight exercises on separate lines
        exerciseList = [...exerciseList, ...bWExercises];

        let formattedBodyWeightExercises = bWExercises.join('\n');
        res.status(200).send(formattedBodyWeightExercises);
    },

    getWE: (req, res) => {
        exerciseList = [...exerciseList, ...wExercises];

        let formattedWeightExercises = wExercises.join('\n');
        res.status(200).send(formattedWeightExercises);
    },

    getCTBWE: (req, res) => {
        // Send body weight exercises on separate lines
        exerciseList = [...exerciseList, ...bWCTExercises];

        let formattedCTBWExercises = bWCTExercises.join('\n');
        res.status(200).send(formattedCTBWExercises);
    },

    getCTWE: (req, res) => {
        exerciseList = [...exerciseList, ...wCTExercises];

        let formattedCTWExercises = wCTExercises.join('\n');
        res.status(200).send(formattedCTWExercises);
    },

    getBBBWE: (req, res) => {
        // Send body weight exercises on separate lines
        exerciseList = [...exerciseList, ...bWBBExercises];

        let formattedBBBWExercises = bWBBExercises.join('\n');
        res.status(200).send(formattedBBBWExercises);
    },

    getBBWE: (req, res) => {
        exerciseList = [...exerciseList, ...wBBExercises];

        let formattedBBWExercises = wBBExercises.join('\n');
        res.status(200).send(formattedBBWExercises);
    },
    
    displayExerciseList: (req, res) => {
        console.log(`It's working!`, exerciseList);
        res.status(200).send(exerciseList);
    },

    getELAll:(req,res) => {
        console.log("Exercise List:", exerciseList);
        res.status(200).send(exerciseList);
    },  
  
    addExercise: (req, res) =>{
        exerciseList.push(req.body.newExercise);
        
        res.status(200).send("Your exercise :- "+req.body.newExercise + " has been added");
    },

    updateEL: (req, res) => {
        const exerciseL = req.body.oldEL;
        const newEL = req.body.newEL;
    
        let updateIndex = exerciseList.indexOf(exerciseL);
    
        if (updateIndex === -1) {
            res.status(400).send("Exercise not found");
            return;
        }
    
        exerciseList[updateIndex] = newEL;
        res.status(200).send(exerciseL + " Update was successful");
    },

    deleteEL:(req,res) => {
        console.log("Deleting"); 
        const { exerciseL } = req.body;
        console.log(exerciseL);
        let deleteIndex = exerciseList.indexOf(exerciseL);
        console.log(deleteIndex);
        if (deleteIndex === -1) {
            res.status(400).send("Exercise not found");
            return;
        }
        exerciseList.splice(deleteIndex, 1);
        console.log("*Deleted");
        res.status(200).send(exerciseL +" Delete was successful");
    },
}
