const Car = require("../Models/carModel");

//get list of all cars
exports.listCars = async (req, res) => {
  try {
    console.log("bonjour");
    /**
     * logic
     * 1-temchi lel base (mongo)
     * 2-t recuperi el mongo result
     * 3-tarja3 resultat lel user
     */
    const cars = await Car.find(); //[{}]
    res.json(cars);
  } catch (err) {
    res.json(err);
  }
};

//post user
exports.addCar = async (req, res) => {
  try {
    /**
     * 1-extraction des data mel request (body)
     * 2-com abec mongo pour l'ajout
     * 3-resulatat(ok , not ok )
     */

    const car = req.body; // {}
    const newCar = await Car.create(car);
    res.json(newCar);
  } catch (err) {
    res.json(err);
  }
};

//delete user

exports.deleteCar = async (req, res) => {
  try {
    /**
     * 1-extraction id mel paramas and vefier l'existence
     * 2- si ok ==> n9oul lel mongo db nfass5ou
     * 3- si not ok (id n'existe pas ) ==> response error
     *
     */

    const carId = req.params.id;
    const deletedCar = await Car.findOneAndDelete({ _id: carId });

    if (!deletedCar) {
      res.json("car with given id not found ");
    } else {
      res.json("car sucessfully deleted ");
    }
  } catch (err) {
    res.json(err);
  }
};

//update user
exports.updateCar = async (req, res) => {
  try {
    /**
     * 1- extraction id mel paramas and vefier l'existence
     * 2- si ok ==> n9oul lel mongo db yamel maj
     * 3- si not ok (id n'existe pas ) ==> response error
     *
     */

    const carId = req.params.id;
    const existedCar = await User.findOne({ _id: carId });

    if (!existedCar) {
      res.json("car with given id not found ");
    } else {
      // si ok ==> n9oul lel mongo db yamel maj
      //na9ra newdata
      const newData = req.body;
      const updatedCar = await User.findByIdAndUpdate(carId, {
        $set: {
          matricule: newData.matricule,
          brand: newData.brand,
          color: newData.color,
        },
      });
      res.json(updatedCar);
    }
  } catch (err) {
    res.json(err);
  }
};
