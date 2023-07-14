const ClosedPass = require("../../db/models/ClosedPass");

const getPassList = async (req, res) => {
  let today = new Date();
  today.setHours(5, 30, 0, 0);

  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const user = req.user;
  const type = req.body.type;

  if (type === "today") {
    console.log("check");
    try {
      const closedPasses = await ClosedPass.find({
        "hostelDetails.hostelName": user.hostelName,
        closingDate: {
          $gt: today,
          $lt: tomorrow,
        },
      }).sort({ closingDate: -1 });

      return res.status(200).json({ size: closedPasses.length, closedPasses });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  if (type === "yesterday") {
    today.setDate(today.getDate() - 1);
    tomorrow.setDate(tomorrow.getDate() - 1);
    try {
      const closedPasses = await ClosedPass.find({
        "hostelDetails.hostelName": user.hostelName,
        closingDate: {
          $gt: today,
          $lt: tomorrow,
        },
      }).sort({ closingDate: -1 });

      return res.status(200).json({ size: closedPasses.length, closedPasses });
    } catch (error) {
      console.log;
    }
  }

  if (type === "month") {
    today.setDate(today.getDate() - 30);
    tomorrow.setHours(5, 30, 0, 0);
    try {
      const closedPasses = await ClosedPass.find({
        "hostelDetails.hostelName": user.hostelName,
        closingDate: {
          $gt: today,
          $lt: tomorrow,
        },
      }).sort({ closingDate: -1 });

      return res.status(200).json({ size: closedPasses.length, closedPasses });
    } catch (error) {
      console.log;
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
