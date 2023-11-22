import { useEffect } from "react";
import { Link } from "react-router-dom";

import { playlistsData } from "../dummyData/playlistsData";
import { GreenPlayButton } from "../components/GreenPlayButton";

const Playlist = ({ playlist }) => (
  <Link
    key={playlist.id}
    to={"playlist/" + playlist.id}
    className="group flex cursor-pointer  flex-col space-y-4 rounded-md bg-[#181818] p-4 transition duration-300 hover:bg-[#282828]"
  >
    <div className="relative  overflow-hidden shadow-[0_8px_24px_rgb(0,0,0,0.5)]">
      <img
        src={playlist.image}
        alt={playlist.name}
        className="h-full w-full shadow-inner shadow-black"
      />
      <div
        className="absolute bottom-2 right-2 hidden h-6 w-6 items-center justify-center rounded-full bg-spotify opacity-0 transition duration-300 hover:scale-105 group-hover:opacity-100 sm:flex md:h-8 md:w-8 lg:h-12 lg:w-12 [&>svg]:w-4 [&>svg]:fill-black md:[&>svg]:w-5  lg:[&>svg]:w-7"
        onClick={(e) => e.preventDefault()}
      >
        <GreenPlayButton playlist={playlist} />
      </div>
    </div>
    <span className=" truncate sm:font-bold">{playlist.name} </span>
  </Link>
);

export const Feed = () => {
  useEffect(() => {
    document.title = "Spotify - Web Player: Music for everyone";
  }, []);

  return (
    <div className="flex flex-col p-4">
      <h1 className=" text-2xl font-bold">Library</h1>
      <div className="mt-2 grid grid-cols-2 grid-rows-1 flex-wrap gap-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {playlistsData.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};
