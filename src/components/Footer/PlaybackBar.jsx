import { useEffect, useRef, useState } from "react";
import { usePlaybackActions } from "../../hooks/usePlaybackActions";
import { useSelector } from "react-redux";
import { PlaybackControlButtons } from "./PlaybackControlButtons";
import { PlaybackSlider } from "./PlaybackSlider";

export const PlaybackBar = () => {
  const timer = useRef(null);

  const [currentTrackTime, setCurrentTrackTime] = useState(0);

  const { setIsPlaying } = usePlaybackActions();

  const {
    id: playingTrackId,
    isReplayEnabled,
    isPlaying,
    duration,
  } = useSelector((state) => state.playback);

  const handleTrackEnd = () => {
    if (isReplayEnabled) {
      setCurrentTrackTime(0);
    } else {
      setIsPlaying(false);
    }
  };

  const handleTrackStart = () => {
    if (Math.round(currentTrackTime) === duration) {
      setCurrentTrackTime(0);
    }
  };

  const handleTrackPause = () => {
    console.log("paused");
  };

  useEffect(() => {
    if (isPlaying) {
      handleTrackStart();
    } else if (Math.round(currentTrackTime) < duration) {
      handleTrackPause();
    }
  }, [isPlaying]);

  // Reset current time when track changes
  useEffect(() => {
    setCurrentTrackTime(0);
  }, [playingTrackId]);

  // Update current time every second when track is playing
  useEffect(() => {
    if (isPlaying) {
      timer.current = setInterval(
        () => setCurrentTrackTime((time) => ++time),
        1024,
      );
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [isPlaying, currentTrackTime]);

  const checkIfTrackFinished = () => {
    if (Math.round(currentTrackTime) === duration) {
      handleTrackEnd();
    }
  };

  useEffect(checkIfTrackFinished, [currentTrackTime]);
  return (
    <div className="col-span-6 hidden flex-col items-center space-y-1.5 sm:flex">
      <PlaybackControlButtons setCurrentTrackTime={setCurrentTrackTime} />
      <PlaybackSlider
        currentTrackTime={currentTrackTime}
        duration={duration}
        setCurrentTrackTime={setCurrentTrackTime}
      />
    </div>
  );
};
