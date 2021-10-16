const Result = require('../../models/Results');


exports.create = async (req, res) => {
  try {
    const { studentId, partNo, urdu, english, islamicEducation, pakistanStudies, physics, computer, math } = req.body;

    const match = await Result.findOne({ studentId: studentId, partNo: partNo });
    if (match) return res.status(200).json({ message: "Result already added" });
    else {
      const student = {
        studentId: studentId,
        urdu: urdu,
        english: english,
        islamicEducation: islamicEducation,
        pakistanStudies: pakistanStudies,
        physics: physics,
        physics: physics,
        computer: computer,
        math: math,
        partNo: partNo
      }
      const newResult = await Result.create(student);
      return res.status(200).json({ message: "Result created successfully...", data: newResult, error: false });
    }

  } catch (error) {
    res.status(200).json({ message: error.message, error: true });
  }
}

exports.getResults = async (req, res) => {
  try {
    const { rollNumber } = req.params;
    const Results = await Result.find().populate('studentId');
    const finalResults = [];
    let totalNo = 0;
    Results?.map((item) => {
      if (item?.studentId?.rollNumber == rollNumber) {
        finalResults.push(item);
        totalNo = totalNo + item?.urdu + item?.english + item?.islamicEducation + item?.pakistanStudies + item?.physics + item?.computer + item?.math
      }
    })
    if(finalResults?.length == 0) res.status(400).json({ message: "Not found", error: true });
    else return res.status(200).json({ message: "Data retrieved", data: {finalResults: finalResults, totalNo: totalNo}, error: false });
  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
}
