const express = require("express");

const Pass = require("../../db/models/Pass");
const Profiles = require("../../db/models/Profile");

const getGeneratedPass = async (req, res) => {
  const uid = req.body.uid;

  try {
    // var pass = await Pass.findOne({ uid });
    const pass = await Pass.findOne({ uid }).populate({path: "warden", select: "name", select: "eid"});
    if (!pass) return res.status(404).json({ message: "Pass not generated" });
    else {
      res.status(200).json(pass);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getGeneratedPass;
