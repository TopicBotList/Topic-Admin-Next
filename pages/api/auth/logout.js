import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    req.session.destroy();
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
