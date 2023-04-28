import { NextApiRequest, NextApiResponse } from "next";
// we'll fetch all the num of the bots from da api
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://api.topiclist.xyz/bots");
  const data = await response.json();
  res.status(200).json(data);
};
