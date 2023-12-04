const Student = require("../Models/studentModel");

//get list of all Students
exports.listStudents = async (req, res) => {
  try {
    const Students = await Student.find(); //[{}]
    res.json(Students);
  } catch (err) {
    res.json(err);
  }
};

//post user
exports.addStudent = async (req, res) => {
  try {
    const student = req.body; // {}
    const newStudent = await Student.create(student);
    res.json(newStudent);
  } catch (err) {
    res.json(err);
  }
};

//delete user

exports.deleteStudent = async (req, res) => {
  try {
    const StudentId = req.params.id;
    const deletedStudent = await Student.findOneAndDelete({ _id: StudentId });

    if (!deletedStudent) {
      res.json("Student with given id not found ");
    } else {
      res.json("Student sucessfully deleted ");
    }
  } catch (err) {
    res.json(err);
  }
};

//update user
exports.updateStudent = async (req, res) => {
  try {
    const StudentId = req.params.id;
    const existedStudent = await User.findOne({ _id: StudentId });

    if (!existedStudent) {
      res.json("Student with given id not found ");
    } else {
      // si ok ==> n9oul lel mongo db yamel maj
      //na9ra newdata
      const newData = req.body;
      const updatedStudent = await User.findByIdAndUpdate(StudentId, {
        $set: { newData },
      });
      res.json(updatedStudent);
    }
  } catch (err) {
    res.json(err);
  }
};
