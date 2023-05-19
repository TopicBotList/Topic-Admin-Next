export default async function handler(req, res) {
    const { serverID } = req.query;
    const response = await fetch(`https://k02hrtapiv5j.topiclist.xyz/server/${serverID}`);
    const data = await response.json();
    res.status(200).json(data);
  }
  