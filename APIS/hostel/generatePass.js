const Pass = require("../../db/models/Pass");
const date = require("../../utils/date")

const generatePass = async (req, res) => {
  const uid = req.body.uid;
  const outTime = req.body.outTime;

  try {
    const existingPass = await Pass.findOne({ uid, outTime });
    if (existingPass)
      return res.status(409).json({ message: "Pass already exist" });
    else {
      const newPass = new Pass({
        name: req.body.name,
        uid: req.body.uid,
        mobileNo: req.body.mobileNo,
        guardianNo: req.body.guardianNo,
        hostelDetails: {
          hostelName: req.body.hostelDetails.hostelName,
          roomNo: req.body.hostelDetails.roomNo,
        },
        purpose: req.body.purpose,
        place: req.body.place,
        outTime: req.body.outTime,
        inTime: req.body.inTime,
        warden: req.body.warden,
        createdOn: await date(),
      });

      await newPass.save().then(() => {
        res.status(200).json({ message: "Pass generated" });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = generatePass;
