import Image from "next/image";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import DarkModeToggle from "react-dark-mode-toggle";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../atoms/darkMode";
import { useRouter } from "next/router";

function Navbar() {
  const { isAuthenticated, authenticate, logout } = useMoralis();
  const [toggle, setToggle] = useRecoilState(darkModeAtom);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.replace("/metaverse");
    else router.replace("/");
  }, [isAuthenticated]);

  useEffect(() => {
    if (toggle) document.querySelector("html").classList.add("dark");
    else document.querySelector("html").classList.remove("dark");
  }, [toggle]);

  return (
    <div className="bg-slate-50 dark:bg-gray-800 dark:text-slate-50 z-50  w-screen h-14 md:h-16 p-5 md:pl-36 md:pr-36 flex items-center place-content-between shadow-sm">
      <div className="h-full flex items-center">
        {/* The branding goes here */}
        <Image
          src="/mypic.jpg"
          className="rounded-full"
          height={45}
          width={45}
        />
        <h3 className="ml-5 font-semibold text-xl text-gray-800 dark:text-slate-50">
          Atharva's Metaverse
        </h3>
      </div>
      <div className="h-full flex items-center">
        <DarkModeToggle onChange={setToggle} checked={toggle} size={60} />
        {isAuthenticated ? (
          <button
            onClick={() => logout()}
            className="border-2 border-blue-500 px-3 py-1 ml-2 rounded-full text-blue-500 shadow-sm shadow-blue-200 dark:shadow-blue-500"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => authenticate()}
            className="border-2 border-blue-500 px-3 py-1 ml-2 rounded-full text-blue-500 shadow-sm shadow-blue-200 dark:shadow-blue-500"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
