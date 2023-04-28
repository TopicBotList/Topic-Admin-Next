// Import the necessary modules
const fetch = require("node-fetch");

// Define the handler function for the API endpoint
async function handler(req, res) {
  // Extract the botID parameter from the request query
  const { botID } = req.query;
  
  // Make a request to the external API to fetch data for the given botID
  const response = await fetch(`https://api.topiclist.xyz/bots/${botID}`);
  
  // Parse the response data as JSON
  const data = await response.json();
  
  // Send the JSON response back to the client
  res.status(200).json(data);
}

// Export the handler function as the default module export
module.exports = handler;
