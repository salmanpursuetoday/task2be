const Student = require('../../models/Students');


exports.create = async (req, res) => {
  try {
    const { fullName, fatherName, rollNumber, registrationNo } = req.body;

    const match = await Student.findOne({ rollNumber: rollNumber });
    if (match) return res.status(400).json({ message: "Student already exits" });
    else {
      const student = {
        fullName: fullName,
        fatherName: fatherName,
        rollNumber: rollNumber,
        registrationNo: registrationNo
      }
      const newStudent = await Student.create(student);
      return res.status(200).json({ message: "Student created successfully...", data: newStudent, error: false });
    }

  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
}

exports.getStudnets = async (req, res) =>{
  try {
    const students  = await Student.find();
    return res.status(200).json({ message: "Data retrieved", data: students, error: false });
  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
}