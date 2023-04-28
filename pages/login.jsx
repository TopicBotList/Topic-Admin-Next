import { useState } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    const redirectUri = process.env.DISCORD_REDIRECT_URI;
    const scopes = "identify"; // Add more scopes if needed
    const clientId = process.env.DISCORD_CLIENT_ID;
    const oauthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;

    // Redirect the user to the Discord OAuth login page
    window.location.href = oauthUrl;
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleLogin}>Login with Discord</button>
      )}
    </div>
  );
};

export default LoginPage;
