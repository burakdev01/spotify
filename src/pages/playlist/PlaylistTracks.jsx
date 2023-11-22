import { PlayIcon, TimeIcon } from "../../icons";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePlaybackActions } from "../../hooks/usePlaybackActions";
import { isMobile } from "react-device-detect";
import { TogglePlayButton } from "../../components/TogglePlayButton";
import { secondsToTime } from "../../utils/secondsToTime";

export const PlaylistTracks = ({ tracks }) => (
  <div className="flex flex-col whitespace-nowrap">
    <PlaylistTracksHeader />
    <div className="sm:px-4">
      {tracks.map((track, index) => (
        <Track key={index} track={track} index={index} />
      ))}
    </div>
  </div>
);

const PlaylistTracksHeader = () => (
  <div
    className={`sticky top-0 z-10  mb-4 grid grid-cols-playlist-tracks-small gap-4 border-b border-white/10 bg-base px-3 py-3  text-sm text-gray sm:px-7 lg:grid-cols-playlist-tracks`}
  >
    <span className="text-center "> # </span>
    <span>Title</span>
    <Column>Album</Column>
    <Column>Date added</Column>
    <Column responsive={false}>
      <TimeIcon />
    </Column>
  </div>
);

const Track = ({ track, index }) => {
  const playingTrackId = useSelector((state) => state.playback.id);
  const { currentPlaylistId } = useParams();
  const { setPlayingTrack } = usePlaybackActions();

  const handlePlayTrack = () => setPlayingTrack(track, currentPlaylistId);

  const handleDblClick = () => handlePlayTrack();

  const handlePointerUp = (e) => {
    e.stopPropagation();
    if (window.innerWidth < 768 || isMobile) handlePlayTrack();
  };
  return (
    <div
      className={`group grid cursor-pointer grid-cols-playlist-tracks-small  items-center gap-4 transition sm:cursor-default sm:hover:bg-[#363432]/80 lg:grid-cols-playlist-tracks ${
        track.id === playingTrackId ? "bg-[#363432]" : null
      } px-3 py-2 text-sm sm:rounded-md`}
      onDoubleClick={handleDblClick}
      onPointerUp={handlePointerUp}
    >
      <TrackIndex track={track} index={index} />
      <TrackDetails track={track} playingTrackId={playingTrackId} />
      <Column>{track.album}</Column>
      <Column>May 21</Column>
      <Column responsive={false}>{secondsToTime(track.duration)}</Column>
    </div>
  );
};

const TrackDetails = ({ track, playingTrackId }) => (
  <div className="flex min-w-0 flex-1 items-center space-x-4">
    <img
      src={track.image}
      alt={track.name}
      className="h-10 w-10 rounded-none"
    />
    <div className="flex  min-w-0 flex-1 flex-col">
      <span
        className={`truncate text-base ${
          track.id == playingTrackId && "text-spotify"
        }`}
      >
        {track.name}
      </span>
      <span className="truncate">{track.artist}</span>
    </div>
  </div>
);

const Column = ({ children, responsive = true }) => (
  <div className={`${responsive && "hidden lg:inline"} truncate`}>
    {children}
  </div>
);

const TrackIndex = ({ track, index }) => {
  const playingTrackId = useSelector((state) => state.playback.id);
  const { currentPlaylistId } = useParams();
  return (
    <div className="relative flex items-center justify-center ">
      <span
        className={`group-hover:opacity-0 ${
          track.id === playingTrackId && "opacity-0"
        }`}
      >
        {index + 1}
      </span>
      <div
        className={`absolute flex items-center justify-center sm:h-10 sm:w-8 
        ${playingTrackId !== track.id && "hidden"} 
        group-hover:inline`}
      >
        <PlayButton
          track={track}
          playingTrackId={playingTrackId}
          playlistId={parseInt(currentPlaylistId)}
        />
      </div>
    </div>
  );
};

const PlayButton = ({ track, playingTrackId, playlistId }) => {
  const isCurrentTrack = track.id === playingTrackId;
  const { setPlayingTrack } = usePlaybackActions();
  const handleClick = (e) => {
    setPlayingTrack(track, playlistId);
  };
  return isCurrentTrack ? (
    <TogglePlayButton />
  ) : (
    <button
      className="flex h-full w-full items-center justify-center [&>svg]:fill-[#BCBCBC]"
      onPointerUp={handleClick}
    >
      <PlayIcon />
    </button>
  );
};
