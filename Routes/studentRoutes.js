const express = require("express");
const router = express.Router();

//njib les fonctionnalitées mel controller
const {
  listStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} = require("../Controllers/studentController");

//get all users
router.get("/listStudents", listStudents);

//add user
router.post("/ajouterStudent", addStudent);

//update user
router.put("/modifierStudent/:id", updateStudent);

//delete user
router.delete("/supprimerStudent/:id", deleteStudent);

module.exports = router;

// localhost:3000/api/Student/listStudents
