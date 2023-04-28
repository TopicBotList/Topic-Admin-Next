import axios from "axios";
import qs from "qs";

const discordTokenUrl = "https://discord.com/api/oauth2/token";

export default async function handler(req, res) {
  const { code } = req.query;

  try {
    // Exchange the authorization code for an access token
    const { data } = await axios.post(
      discordTokenUrl,
      qs.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        scope: "identify", // Make sure it's the same as the one used in the login page
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // Here, you can use the access token to make API calls to the Discord API
    console.log(data);

    // Redirect the user to the homepage
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
