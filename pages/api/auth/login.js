import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    const { code } = req.query;

    if (!code) {
      return res.status(400).send("No code provided");
    }

    const redirect_uri = process.env.DISCORD_REDIRECT_URI;
    const client_id = process.env.DISCORD_CLIENT_ID;
    const client_secret = process.env.DISCORD_CLIENT_SECRET;

    const data = {
      client_id,
      client_secret,
      grant_type: "authorization_code",
      code,
      redirect_uri,
      scope: "identify",
    };

    const searchParams = Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");

    const response = await fetch(`https://discord.com/api/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: searchParams,
    });

    if (!response.ok) {
      console.error(response);
      return res.status(400).send("Failed to get access token");
    }

    const { access_token } = await response.json();

    const userResponse = await fetch(`https://discord.com/api/users/@me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!userResponse.ok) {
      console.error(userResponse);
      return res.status(400).send("Failed to get user info");
    }

    const user = await userResponse.json();

    req.session.set("user", user);
    await req.session.save();

    res.redirect("/");
  },
  {
    cookieName: "discord-auth",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
    password: process.env.SESSION_SECRET,
  }
);
