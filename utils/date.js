async function getCurrentDateTime() {
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return currentDate.toLocaleString("en-US", options);
}
module.exports = getCurrentDateTime;
