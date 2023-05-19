const { NextApiRequest, NextApiResponse } = require("next");

module.exports = async function (req, res) {
  const response = await fetch("https://k02hrtapiv5j.topiclist.xyz/server");
  const data = await response.json();

  var filteredData = [];

  data.forEach((b) => {
    if (b.state === 0) {
      filteredData.push(b);
    }
  });

  res.status(200).json(filteredData);
};
