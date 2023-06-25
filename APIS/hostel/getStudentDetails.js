const express = require("express");

const Students = require("../../db/models/Student");

const getStudentDetails = async (req, res) => {
  const uid = req.body.uid;

  try {
    const student = await Students.findOne({ uid });
    if (!student) return res.status(404).json({ message: "Student not found" });
    else
      res.status(200).json({
        name: student.name,
        uid: student.uid,
        mobileNo: student.mobileNo,
        guardianNo: student.guardianNo,
        hostelDetails: {
          hostelName: student.hostelDetails?.hostelName,
          roomNo: student.hostelDetails?.roomNo,
        },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getStudentDetails;
