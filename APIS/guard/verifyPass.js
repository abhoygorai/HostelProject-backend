const Pass = require("../../db/models/Pass");
const Verifiedpass = require("../../db/models/VerrifiedPass");

const verifyPass = async (req, res) => {
  const uid = req.body.uid;

  try {
    const pass = await Pass.findOne({ uid }).populate({
      path: "warden",
      select: "name",
      select: "eid",
    });
    if (!pass) return res.status(404).json()({ message: "No pass is there" });
    else {
      const verifiedpass = new Verifiedpass({ pass });
      verifiedpass
        .save()
        .then(async () => {
          await Pass.deleteOne({ uid });
          res.status(200).json({ message: "Pass veriffied" });
        })
        .catch((e) => {
          res.status(500).json({ message: "Server error" });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = verifyPass;
