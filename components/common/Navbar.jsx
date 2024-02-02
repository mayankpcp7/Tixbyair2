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
        <div className="flex md:mt-[-1px]  justify-between md:items-start items-center border-b-2 border-black ">
          <div className=" border-r-[2px] border-black border-solid ">
            <Image
              className="max-w-[73px] sm:max-w-[180px] m-2 sm:mx-[30px] sm:my-[10px] cursor-pointer"
              src={logo}
              alt="logo"
            ></Image>
          </div>
          <div onClick={showUl} className="z-20 md:hidden">
            <h3 className="text-black text-[20px]">
              {head ? (
                <BiMenu className=" border-black" />
              ) : (
                <RxCross1 className="text-[#4d4d4d]" />
              )}
            </h3>
          </div>
          <div
            className={`flex flex-col md:flex-row fixed md:relative w-full min-h-screen md:min-h-0 top-[0] left-[-100%] md:left-0 ttransition-opacity duration-700 md:transition-none  justify-center md:justify-end
           items-center ${head ? "" : "!left-0 backdrop-blur-lg"}`}
          >
            <li className="border-x-2 px-[30px] pt-[30px] pb-[25px] border-black">
              <a
                className="text-black font-inter text-base font-normal leading-6 "
                href="#"
              >
                Features
              </a>
            </li>
            <li className="md:border-r-2  md:ps-[36px] md:pe-[24px] pt-[30px] pb-[25px] border-black">
              <a
                className="text-black font-inter text-base font-normal leading-6 "
                href="#"
              >
                Faq
              </a>
            </li>
            <button className="border-0 border-r-2 mb-[-1px] py-[27.5px] ps-[55px] pe-[58px] bg_orange font-semibold border-black">
              LOG IN
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
