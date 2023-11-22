import { useSelector } from "react-redux";
import { usePlaybackActions } from "../hooks/usePlaybackActions";
import { PauseIcon, PlayIcon } from "../icons";

export function TogglePlayButton() {
  const isPlaying = useSelector((state) => state.playback.isPlaying);
  const { setIsPlaying } = usePlaybackActions();

  return (
    <span
      className="flex h-full w-full flex-1 items-center justify-center"
      onPointerUp={(e) => {
        e.stopPropagation();
        setIsPlaying(!isPlaying);
      }}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </span>
  );
}
