import { useState } from "react";

export default function PartnerCard({
  name,
  pfp,
  banner,
  bio,
  link1,
  link2,
  link1Title,
  link2Title,
  link1Icon,
  link2Icon,
  customBackground,
}) {
  const [isCustomBackground, setIsCustomBackground] = useState(false);

  const handleClick = () => {
    setIsCustomBackground((prev) => !prev);
  };

  return (
    <div
      className={`rounded-lg p-4 shadow-md hover:shadow-lg ${
        isCustomBackground ? customBackground : "bg-gradient-to-r from-cyber-cyan to-cyber-purple"
      }`}
      onClick={handleClick}
    >
      <div
        className={`rounded-lg p-3 ${banner} hover:scale-105 transition-transform`}
      >
        <div className="flex items-center">
          <img
            src={pfp}
            className="rounded-full border-2 border-cyber-blue w-24 h-24 object-cover shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform logo-spin-animation"
            draggable={false}
            alt={name + " pfp"}
          />
          <div className="items-center pl-4">
            <p className="inline-block text-3xl font-semibold text-neon-green">
              {name}&nbsp;
            </p>
            <br />
          </div>
        </div>
      </div>
      <div
        className="mt-3 rounded-lg bg-cyber-black/70 p-3"
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          animation: "glowAnimation 2s ease-in-out infinite",
        }}
      >
        <p className="text-cyber-white">{bio}</p>
      </div>
      <div className="mt-3 flex">
        <a
          href={link1}
          target="_blank"
          className="w-1/2 rounded-lg bg-cyber-black/90 p-4 text-center text-cyber-white hover:opacity-75 focus:outline-none transform hover:scale-110 transition-transform neon-glow"
          rel="noreferrer"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            animation: "glowAnimation 2s ease-in-out infinite",
          }}
        >
          <i className={`fas fa-external-link-alt text-cyber-cyan ${link1Icon}`} />{" "}
          {link1Title}
        </a>
        <a
          href={link2}
          target="_blank"
          className="ml-3 w-1/2 rounded-lg bg-cyber-black/90 p-4 text-center text-cyber-white hover:opacity-75 focus:outline-none transform hover:scale-110 transition-transform neon-glow"
          rel="noreferrer"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            animation: "glowAnimation 2s ease-in-out infinite",
          }}
        >
          <i className={`fas fa-external-link-alt text-cyber-cyan ${link2Icon}`} />{" "}
          {link2Title}
        </a>
      </div>
      <style jsx>{`
        @keyframes glowAnimation {
          0% {
            box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 12px rgba(0, 255, 255, 0.7);
          }
          100% {
            box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
          }
        }

        .bg-gradient-neon-red {
          background: linear-gradient(90deg, #ff1493, #ff4500);
        }

        .bg-gradient-neon-blue {
          background: linear-gradient(90deg, #00e8ff, #00fff8);
        }

        .bg-gradient-neon-green {
          background: linear-gradient(90deg, #00ff00, #adff2f);
        }

        .bg-gradient-neon-purple {
          background: linear-gradient(90deg, #800080, #8a2be2);
        }

        .bg-cyber-black {
          background-color: #0c111b;
        }

        .bg-gradient-to-r {
          background: linear-gradient(to right, from-cyber-cyan, to-cyber-purple);
        }

        .text-cyber-cyan {
          color: #00f0f0;
        }

        .text-cyber-purple {
          color: #a71aff;
        }

        .text-cyber-white {
          color: #f0f0f0;
        }

        .text-neon-green {
          color: #39ff14; /* Neon Green color, you can adjust the color code as needed */
        }
      `}</style>
    </div>
  );
}
