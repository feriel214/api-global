const express = require("express");
const router = express.Router();

//njib les fonctionnalitées mel controller
const {
  listCars,
  addCar,
  deleteCar,
  updateCar,
} = require("../Controllers/carController");

//get all users
router.get("/listcars", listCars);

//add user
router.post("/ajouterCar", addCar);

//update user
router.put("/modifierCar/:id", updateCar);

//delete user
router.delete("/supprimerCar/:id", deleteCar);

module.exports = router;

// localhost:3000/api/car/listcars
