"use client";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import logo from "../../public/images/webp/navlogo.webp";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
const NavBar = () => {
  const [head, setHead] = useState(true);

  useEffect(() => {
    if (!head) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [head]);

  function showUl() {
    setHead(!head);
  }
  return (
    <>
      <section className="relative z-[2]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center py-[20px] pe-3 xl:pe-5">
            <div>
              <Image
                className="w-[340px] cursor-pointer"
                src={logo}
                alt="logo"
              ></Image>
            </div>
            <div onClick={showUl} className="z-20 xl:hidden">
              <h3 className="text-purple text-[30px]">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
            <div
              className={`flex flex-col xl:flex-row fixed xl:relative w-full min-h-screen xl:min-h-0 top-[0] left-[-100%] xl:left-0 ttransition-opacity duration-700 xl:transition-none  justify-center xl:justify-end
           items-center ${head ? "" : "!left-0 backdrop-blur-lg"}`}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
