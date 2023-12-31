const express = require("express");
const cors = require("cors");
const ctrl = require("./ctrl/ctrl.js");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

const { getBWE, getWE, getBBBWE, getCTBWE, getBBWE, getCTWE, addExercise, updateEL, deleteEL, getELAll  } = ctrl;


app.get("/api/BWE", getBWE);
app.get("/api/WE", getWE);
app.get("/api/BBBWE", getBBBWE);
app.get("/api/BBWE", getBBWE);
app.get("/api/CTBWE", getCTBWE);
app.get("/api/CTWE", getCTWE);
app.get("/api/exercise/all", getELAll);
app.post("/api/exercise", addExercise);
app.put("/api/exercise", updateEL);
app.delete("/api/exercise", deleteEL);


const PORT = 4002;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
