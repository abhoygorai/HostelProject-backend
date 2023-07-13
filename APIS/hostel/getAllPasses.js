const ClosedPass = require("../../db/models/ClosedPass");

const getPassList = async (req, res) => {
  let today = new Date();
  console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
  console.log(today)

  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
//   console.log(tomorrow)

  const user = req.user;
  const type = req.type;
  if (type === "today") {
    try {
      const closedPasses = await ClosedPass.find({
        "hostelDetails.hostelName": user.hostelName,
        // closingDate: {
        //   $gt: today,
        //   $lt: tomorrow,
        // },
      }).sort({ closingDate: -1 });

      return res.status(200).json({ size: closedPasses.length, closedPasses });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  }

  try {
    const closedPasses = await ClosedPass.find({
      "hostelDetails.hostelName": user.hostelName,
    }).sort({ createdAt: -1 });

    return res.status(200).json({ size: closedPasses.length, closedPasses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getPassList;
