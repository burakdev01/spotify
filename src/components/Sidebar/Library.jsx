import { AddIcon, LibraryIcon, RightArrowIcon } from "../../icons";
import { Link, useParams } from "react-router-dom";
import { playlistsData } from "../../dummyData/playlistsData";
import { useSelector } from "react-redux";

export const Library = () => {
  return (
    <div className="hidden min-h-0 flex-1 flex-col space-y-4 rounded-col bg-base pt-4 sm:flex">
      <LibraryHeader />
      <Playlists />
    </div>
  );
};

const LibraryHeader = () => {
  return (
    <div className="flex cursor-pointer justify-between px-4">
      <div className="flex space-x-2 [&>svg]:w-6 ">
        <LibraryIcon />
        <span className="font-bold text-gray">Library</span>
      </div>
      <div className="flex space-x-4">
        <AddIcon />
        <RightArrowIcon />
      </div>
    </div>
  );
};

const Playlists = () => {
  const { currentPlaylistId } = useParams();
  const playingPlaylistId = useSelector((state) => state.playback.playlist_id);

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll px-2">
      {playlistsData.map((playlist) => (
        <Link
          key={playlist.id}
          to={`playlist/${playlist.id}`}
          className={` 
             flex cursor-pointer space-x-2 rounded-md p-2 hover:bg-[#212121] active:bg-[#2B2B2B] 
             ${playlist.id == currentPlaylistId && "bg-[#1A1A1A]"}
           `}
        >
          <img src={playlist.image} alt={playlist.name} className="h-12 w-12" />
          <PlaylistInfo
            name={playlist.name}
            isPlaying={playingPlaylistId == playlist.id}
          />
        </Link>
      ))}
    </div>
  );
};

const PlaylistInfo = ({ name, isPlaying }) => {
  return (
    <div className="flex min-w-0 flex-1 flex-col ">
      <span className={`truncate ${isPlaying && "text-spotify"}`}>{name}</span>
      <span className="truncate text-sm text-neutral-400">Playlist</span>
    </div>
  );
};
