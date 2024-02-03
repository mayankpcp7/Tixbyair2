import React from "react";
import { service } from "./Helper";
import Image from "next/image";
const Service = () => {
  return (
    <>
      <section className="pt-[89px] px-2 bg-white lg:pb-[118px] sm:px-5 md:-pb-[60px] pb-[48px]">
        <div className="max-w-[1140px] mx-auto ">
          <div className="flex sm:flex-col lg:flex-row ps-4 md:ps-0 flex-col sm:items-center items-start justify-between">
            <h2 className="lg:text-start sm:text-center text-start font-black text-[28px] sm:text-4xl  lg:text-5xl font-satoshi max-w-[560px] text-black">
              Discover Our Service Spectrum
            </h2>
            <p className="lg:text-start sm:text-center text-start font-inter font-normal text-base pt-[10px] md:pt-0 text-black opacity-70 max-w-[403px]">
              Lorem ipsum dolor sit amet consectetur. Eget mattis justo cras
              amet tortor nisl lacinia. Ut et donec ac velit diam lectus dui.
            </p>
          </div>
          <div className="flex md:mx-[-17px] flex-row justify-center  md:mt-12 mt-7 flex-wrap">
            {service.map((card) => {
              return (
                <>
                  <div
                    className="pb-8 lg:pb-0 hover:translate-y-[-5%] duration-300 sm:w-6/12 lg:w-4/12 p_3 px-[17px]"
                    key={card.id}
                  >
                    <div className="flex lg:pb-6 sm:justify-between md:justify-start px-6 md:px-5  lg:px-6  max-w-[354px] sm:max-w-full pt-[22px] sm:pt-3 h-full border-2 pb-[18px] sm:pb-3 border-solid border-black rounded-[10px] service_shadow flex-col items-start">
                      <Image
                        className="sm:max-w-[67px] max-w-[60px]"
                        src={card.img}
                      ></Image>
                      <h4 className="text-start pt-6 sm:pt-3 md:pt-5  text-[20px] md:text-2xl font-satoshi font-medium">
                        {card.heading}
                      </h4>
                      <p className="font-inter font-normal text-base pt-[10px] sm:pt-3">
                        {card.pera}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
