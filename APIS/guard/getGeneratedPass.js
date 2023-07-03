const Pass = require("../../db/models/Pass");
const OpenedPass = require("../../db/models/OpenPass");

const getGeneratedPass = async (req, res) => {
  const uid = req.body.uid.toUpperCase();

  try {
    const openPass = await OpenedPass.findOne({ uid })
      .populate({
        path: "warden",
        select: "name",
      })
      .populate({
        path: "openedBy",
        select: "name",
      });
    if (openPass) res.status(200).json(openPass);
    else {
      const pass = await Pass.findOne({ uid }).populate({
        path: "warden",
        select: "name",
      });
      if (!pass) return res.status(404).json({ message: "Pass not generated" });
      else {
        res.status(200).json(pass);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getGeneratedPass;
