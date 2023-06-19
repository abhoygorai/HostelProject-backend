const mongoose = require("mongoose");
const Profile = require("./db/models/Profile");
const bcrypt = require("bcrypt");

const fufu = async (req, res) => {
  const hashedPassword = await bcrypt.hash("mypass", 5);

  try {
    const newProfile = new Profile({
      eid: "1234",
      password: hashedPassword,
      name: "John Doe",
      role: "warden",
    });

    await newProfile.save().then(() => {
      res.send("saved");
    });
  } catch (error) {
    console.error("Error creating profile:", error);
  }
};

module.exports = fufu;
