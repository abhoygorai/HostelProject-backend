const express = require("express");
const bcrypt = require("bcrypt");
const Profile = require("../../db/models/Profile");

const login = async (req, res) => {
  const { eid, password } = req.body;

  try {
    const user = await Profile.findOne({ eid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({
      _id: user._id,
      eid: user.eid,
      name: user.name,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = login;
