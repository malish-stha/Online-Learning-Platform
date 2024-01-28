import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full h-screen relative flex items-center">
      {/* Image Section */}
      <div className="hidden md:block md:w-[50%] md:max-w-[700px]  overflow-none hero_animation">
        <Image
          src={require("../../../public/assets/banner.png")}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* Text and Search Section */}
      <div className="w-full md:w-[50%] px-4 md:px-8 py-16 md:py-0">
        <h2 className="dark:text-white text-[30px] md:text-[70px] font-[600] font-Josefin mb-4">
          Improve your Online Learning Experience Instantly
        </h2>
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] md:w-full md:max-w-md lg:w-[75%] mb-8">
          We have 40k+ Online courses and 500k+ registered students. Find your
          desired courses from them.
        </p>

        {/* Search Bar */}
        <div className="w-full md:w-[50%] bg-transparent relative">
          <input
            type="search"
            placeholder="             Search for courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-14 h-full left-0 top-0 bg-[#39c1f3] rounded-l-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>

        {/* Trust Section */}
        <div className="flex items-center mt-5 space-x-4">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative w-12 h-12 rounded-full overflow-hidden"
            >
              <Image
                src={require("../../../public/assets/banner.png")}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 md:mt-0 md:pl-3 text-[18px] font-[600]">
          500K+ people already trusted us.{" "}
          <Link href="/courses" className="dark:text-[#46e256] text-[crimson]">
            View Course
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
