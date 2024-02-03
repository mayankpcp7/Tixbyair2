import React from "react";
import Navbar from "./Navbar";
import headerimg from "../../public/images/webp/headerimg.webp";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="xl:min-h-screen overflow-hidden flex flex-col">
        <Navbar />
        <main className="flex h-full items-center pt-[103px]  pt-15 xl:pt-0 grow bg_header relative">
          <Image
            className="hidden md:block absolute end-[-6%] lg:end-[1%] max-w-[380px] lg:max-w-[480px] xl:max-w-[649px] top-[20%] 2xl:top-[20%]"
            src={headerimg}
          ></Image>
          */
          <div className="container max-w-[1240px] mx-auto px-3">
            <div className="flex items-center md:flex-row flex-col justify-between relative">
              <div className="md:max-w-[429px] lg:max-w-[506px] xl:max-w-[586px] flex flex-col items-start">
                <p
                  className="font-inter font-semibold text-[rgba(13, 12, 12, 1)] text-base
]"
                >
                  Welcome To TixByAir
                </p>
                <h1 className="text-start leading-[120%]  font-inter font-black lg:text-5xl text-[41px] xl:text-6xl">
                  Instantly Track{" "}
                  <span className="community tracking-[-0.2px]">
                    Your Community{" "}
                  </span>{" "}
                  Engagement!
                </h1>
                <p className="text-start font-inter max-w-[530px] text-base font-normal opacity-70 pt-4">
                  See who showed up. View analytics, create tickets, and track
                  who's supporting you the most.
                </p>
                <button className="font-inter flex items-center duration-300 justify-center mt-10 border rounded-[8px] btn_shadow border-black w-[255px] h-[57px] font-semibold text-base bg_btn text-black">
                  CREATE YOUR COMMUNITY
                </button>
              </div>
              <div>
                <Image
                  className="max-w-[382px] me-[-10%] sm:max-w-[400px] mt-12 md:hidden "
                  src={headerimg}
                ></Image>
              </div>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
