import { FaSpinner } from "react-icons/fa";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    Cookies.remove("token");
    window.location.href = "/";
  }, [router.isReady]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <FaSpinner
          className="animate-spin"
          color={"brandColor.500"}
          fontSize={"2xl"}
        />
        <span
          style={{
            color: "#fff",
            fontSize: "2xl",
            fontWeight: "semibold",
            marginLeft: "10px",
          }}
        >
          Logging out..
        </span>
      </div>
      <p style={{ color: "whiteAlpha.800", textAlign: "center" }}>
        We&apos;re destroying your token. Please don&apos;t leave this page.
      </p>
    </div>
  );
}
