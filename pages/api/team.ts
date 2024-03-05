import { NextApiRequest, NextApiResponse } from "next";

const TeamFetch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(
      "https://api.topiclist.xyz/private/team" //not up yet. Under construction.
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default TeamFetch;

//This'd theroratically fetch all the staff memeber from the main dc server and put then into the team page.