import React from "react";
import { exploreData } from "../../dummyData/exploreData";

const Box = ({ box }) => (
  <a
    key={box.name}
    style={{ backgroundColor: box.bgColor }}
    className={`after:content-[" "] relative flex h-[100px]  w-full cursor-pointer overflow-hidden rounded-lg after:block after:pb-[50%] md:h-full md:after:pb-[100%]`}
  >
    <span className="  atruncate z-20 p-4 text-lg font-bold md:text-2xl">
      {box.name}
    </span>
    <img
      src={box.img}
      alt=""
      className="absolute bottom-0 left-[calc(100%-45px)] right-[calc(100%-45px)] z-10 h-16 w-16 translate-x-[18%] translate-y-[-2%] rotate-[25deg] md:left-auto md:right-0 md:h-[100px] md:w-[100px]"
    />
  </a>
);

export const Explore = () => (
  <div className="flex flex-col">
    <h2 className="mb-4 text-2xl font-bold">Browse All</h2>
    <div className="grid grid-cols-2 grid-rows-[1fr] gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9">
      {exploreData.map((box) => (
        <Box key={box.id} box={box} />
      ))}
    </div>
  </div>
);
