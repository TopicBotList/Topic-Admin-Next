import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import BotCard from "../components/cards/BotCard";
import { motion } from "framer-motion";

interface Bot {
  id: string;
  name: string;
  votes: number;
  avatar: string;
  banner: string;
  shortdesc: string;
  approved: boolean;
}

interface HomeProps {
  abots: Bot[];
}

export default function Home({ abots }: HomeProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  const zcontainer: { hidden: any; show: any } = {
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

  const zitem: { hidden: any; show: any } = {
    hidden: { opacity: 0, scale: 0.7 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="p-5 lg:p-10 pt-20 rounded-lg min-h-screen">
      <div className="pb-24">
        <p className="text-3xl italic font-semibold text-black/80 dark:text-white/80">
          All Bots
        </p>
        <p className="text-lg italic font-normal text-black/80 dark:text-white/80 mb-2">
          All the bots present in TopicList
        </p>

        <motion.div variants={zcontainer} initial="hidden" animate="show">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-24 mt-5">
            {abots.map((bot: Bot) => {
              if (!bot.approved) return null;
              return (
                <motion.div key={bot.id} variants={zitem}>
                  <BotCard
                    name={bot.name}
                    id={bot.id}
                    votes={bot.votes}
                    avatar={bot.avatar}
                    banner={bot.banner}
                    shortdesc={bot.shortdesc}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || "";
  const data: { bots: Bot[] } = await fetch(`${apiUrl}/find_bots`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`[Error]: ${err}`);
      return { bots: [] };
    });

  return {
    props: {
      abots: data?.bots || [],
    },
  };
}
