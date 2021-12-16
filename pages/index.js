import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../atoms/darkMode";
import Navbar from "../components/Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const router = useRouter();

  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();

  return (
    <div className="">
      <Head>
        <title>Atharva's Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* Hero section */}
      <div className="grid grid-cols-7 gap-0 dark:bg-gray-900 dark:text-slate-50">
        <div className="col-span-5 md:col-span-3 md:pl-36 pl-5 flex flex-col justify-center">
          <div className="text-4xl font-bold">Enter the Metaverse</div>
          <div className="text-xl mt-5">
            Join now and start talking to people all around the globe!
          </div>
          <button
            onClick={() => authenticate()}
            className="w-52 mt-5 bg-purple-400 dark:bg-purple-600 text-white text-lg px-3 py-2 rounded-lg hover:animate-pulse"
          >
            Login to Metaverse!
          </button>
        </div>
        <div
          className="col-span-2 md:col-span-4 border- h-96 relative "
          style={{
            backgroundImage: `linear-gradient(to left,transparent, ${
              darkMode ? "#0f172a" : "white"
            } 100%) , url('https://links.papareact.com/55n')`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Tech used */}
      <div className="dark:bg-gray-900 dark:text-slate-50 p-5 pb-20 md:pl-36 md:pr-36 flex flex-col items-center">
        <h1 className="mt-10 text-4xl font-bold">Technologies used</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-36 mt-10">
          <div className="h-32 w-32">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              className="object-cover"
            />
          </div>
          <div className="h-32 w-32">
            <img
              src="https://cdn.icon-icons.com/icons2/2389/PNG/512/next_js_logo_icon_145038.png"
              className="object-cover"
            />
          </div>
          <div className="h-32 w-32">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-36 mt-10">
          <div className="h-32 w-32">
            <img
              src="https://moralis.io/wp-content/uploads/2021/06/cropped-Moralis-Favicon-Glass.png"
              className="object-cover"
            />
          </div>
          <div className="h-32 w-32">
            <img
              src="https://cdn.consensys.net/uploads/metamask-1.svg"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="dark:bg-gray-700 bg-gray-300 dark:text-slate-50 p-5 md:pl-36 md:pr-36 flex flex-col text-center">
        Made by Atharva Deosthale
      </div>
    </div>
  );
}
