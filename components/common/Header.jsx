import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <header className="xl:min-h-screen flex flex-col">
        <Navbar />
        <main className="flex h-full items-center grow bg_header">
          <div className="container max-w-[1140px] mx-aut0 px-3">
            <div className="flex items-center">
              <div className="max-w-[586px]">
                <p
                  className="font-inter font-semibold text-[rgba(13, 12, 12, 1)] text-base leading-[487.5%]
]"
                >
                  Welcome To TixByAir
                </p>
                <h1 className="text-start font-inter font-black text-6xl">
                  Instantly Track <span> </span> Engagement!
                </h1>
              </div>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
