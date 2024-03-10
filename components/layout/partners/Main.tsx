import React from "react";
import swr from "../../../service/swr";
import Image from "next/image";

interface Partner {
  link: string;
  image: string;
  logo: string;
  title: string;
  text: string;
}

export default function Main(): JSX.Element {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { data: _Partner } = swr(
    `${apiUrl}/partners/@all`,
    600000,
  ) as { data?: Partner[] };
  const Partner = _Partner || [];

  return (
    <div className="w-full px-5">
      {!Partner.length ? (
        <div className="mx-auto max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <a href={"#"} key={index} className="p-5 rounded-lg bg-[#090909]">
              <div className="w-full h-36 animate-pulse rounded-md overflow-hidden bg-white/10">
                <div className="w-full h-full backdrop-blur flex items-center justify-center" />
              </div>
              <div className="w-20 animate-pulse h-6 mt-5 rounded-md bg-white/10" />
              <div className="mt-2 flex items-center flex-wrap">
                <div className="animate-pulse w-16 h-4 rounded-md bg-white/10" />
                <div className="animate-pulse ml-2 w-20 h-4 rounded-md bg-white/10" />
                <div className="animate-pulse ml-2 w-8 h-4 rounded-md bg-white/10" />
                <div className="animate-pulse ml-2 w-20 h-4 rounded-md bg-white/10" />
                <div className="animate-pulse mt-1 w-12 h-4 rounded-md bg-white/10" />
                <div className="animate-pulse mt-1 ml-2 w-4 h-4 rounded-md bg-white/10" />
                <div className="animate-pulse mt-1 ml-2 w-16 h-4 rounded-md bg-white/10" />
                <div className="animate-pulse mt-1 ml-2 w-24 h-4 rounded-md bg-white/10" />
              </div>
              <div className="flex items-center space-x-2 mt-12">
                <div className="animate-pulse w-32 h-5 rounded-md bg-white/10" />
                <div className="animate-pulse w-5 h-5 rounded-md bg-white/10" />
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Partner.map((partner, index) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={partner.link}
              key={index}
              className="p-5 rounded-md bg-[#090909]"
            >
              <div
                className="w-full h-36 rounded-md overflow-hidden"
                style={{
                  background: `url(${partner.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full h-full backdrop-blur flex items-center justify-center">
                  <Image
                    className="w-24 h-24 rounded-full"
                    src={partner.logo}
                    alt="Partner Logo"
                    width={104}
                    height={104}
                  />
                </div>
              </div>
              <h1 className="text-white font-bold text-2xl mt-5">
                {partner.title}
              </h1>
              <h6 className="text-zinc-400 text-sm h-24">{partner.text}</h6>
              <h1 className="hover:underline text-zinc-200">
                {partner.link}{" "}
                <i className="fal fa-arrow-up-right-from-square ml-1" />
              </h1>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
