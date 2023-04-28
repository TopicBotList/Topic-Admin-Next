export default async function handler(req, res) {
  const { botID } = req.query;
  const response = await fetch(`https://api.topiclist.xyz/bots/${botID}`);
  const data = await response.json();
  res.status(200).json(data);
}
