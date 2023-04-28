const { NextApiRequest, NextApiResponse } = require("next");

module.exports = async function (req, res) {
  const response = await fetch("https://api.topiclist.xyz/bots");
  const data = await response.json();

  var filteredData = [];

  data.forEach((b) => {
    if (b.state === 0) {
      filteredData.push(b);
    }
  });

  res.status(200).json(filteredData);
};
