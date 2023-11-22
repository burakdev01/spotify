import { useSelector } from "react-redux";
import { TogglePlayButton } from "./TogglePlayButton";
import { PlayIcon } from "../icons";
import { usePlaybackActions } from "../hooks/usePlaybackActions";

export function GreenPlayButton({ playlist }) {
  const playingPlaylistId = useSelector((state) => state.playback.playlist_id);
  const isPlaylistPlaying = playingPlaylistId === playlist.id;

  return (
    <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-spotify transition duration-100 hover:scale-105 active:scale-100 [&>*>svg]:w-6 [&>*>svg]:fill-black">
      {isPlaylistPlaying ? (
        <TogglePlayButton />
      ) : (
        <PlayFirstTrackButton playlist={playlist} />
      )}
    </button>
  );
}

function PlayFirstTrackButton({ playlist }) {
  const { setPlayingTrack } = usePlaybackActions();
  return (
    <span
      className="flex h-full w-full items-center justify-center [&>svg]:fill-black"
      onPointerUp={(e) => {
        setPlayingTrack(playlist.tracks[0], playlist.id);
      }}
    >
      <PlayIcon />
    </span>
  );
}
