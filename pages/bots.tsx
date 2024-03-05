import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import BotCard from "../components/cards/BotCard";
import { motion } from "framer-motion";
import $ from "jquery";

export default function Render({ abots }) {
  const router = useRouter();

  const zcontainer = {
    hidden: { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const zitem = {
    hidden: { opacity: 0, scale: 0.7 },
    show: { opacity: 1, scale: 1 },
  };

  const [searchResults, setSearchResults] = useState([]); // Define searchResults state

  useEffect(() => {
    const input = document.getElementById("searchInput") as HTMLInputElement; // Cast to HTMLInputElement
    if (input) {
      const inputValue = input.value.toLowerCase(); // Get input value
      const results = abots.filter((bot) => {
        if (bot.approved) {
          const botname = bot.name.toLowerCase().split("");
          let howmuch = 0;
          botname.forEach((item) =>
            inputValue.includes(item) ? (howmuch += 1) : null,
          );
          if (
            howmuch / botname.length >= 0.5 &&
            howmuch / botname.length <= 2
          ) {
            return true;
          } else {
            const botDesc = bot.shortdesc
              .toLowerCase()
              .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
              .split(" ");
            let match = 0;
            botDesc.forEach((item) =>
              inputValue.includes(item) ? (match += 1) : false,
            );
            return (
              match / botDesc.length >= 0.25 && match / botDesc.length <= 2
            );
          }
        }
        return false;
      });
      setSearchResults(results); // Update searchResults state
    }
  }, [abots]);

  return (
    <motion.div variants={zcontainer} initial="hidden" animate="show">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-24 mt-5">
        {searchResults.map((bot) => (
          <motion.div variants={zitem}>
            <BotCard
              name={bot.name}
              id={bot.id}
              votes={bot.votes}
              avatar={bot.avatar}
              banner={bot.banner}
              shortdesc={bot.shortdesc}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export async function getServerSideProps(context) {
  const apiUrl = process.env.apiUrl;
  const data = await fetch(`${process.env.apiUrl}/find_bots?limit=8`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`[Error]: ${err}`);
      return {
        bots: [],
        lbots: [],
      };
    });

  return {
    props: {
      abots: data?.bots,
      lbots: data?.lbots,
      isLoggedIn: context.req.cookies.token ? true : false,
    },
  };
}
