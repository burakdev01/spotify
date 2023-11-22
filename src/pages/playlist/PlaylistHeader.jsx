import React from "react";

const Image = ({ src, alt, className }) => (
  <div className="m-auto md:m-0">
    <img
      src={src}
      alt={alt}
      className="h-36 w-36 sm:h-[14.5rem] sm:w-[14.5rem]"
    />
  </div>
);

const Description = ({ desc, tracks }) => (
  <div className="flex flex-col space-y-4 text-sm">
    <span className="line-clamp-2">{desc}</span>
    <span>{tracks.length} songs</span>
  </div>
);

const Name = ({ name }) => (
  <h1 className="truncate  text-[2rem] font-black leading-normal tracking-normal sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[6rem]">
    {name}
  </h1>
);

export const PlaylistHeader = ({ desc, image, name, tracks, bgColor }) => (
  <div
    className="flex flex-col p-4 sm:space-x-6 md:flex-row md:items-end"
    style={{ backgroundColor: bgColor }}
  >
    <Image src={image} alt={name} />
    <div className="flex min-w-0 flex-1 flex-col">
      <Name name={name} />
      <Description desc={desc} tracks={tracks} />
    </div>
  </div>
);
