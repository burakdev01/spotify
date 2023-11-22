import { useState } from "react";
import { secondsToTime } from "../../utils/secondsToTime";
import { Slider } from "../Slider";

export function PlaybackSlider({
  duration,
  currentTrackTime,
  setCurrentTrackTime,
}) {
  const handleSliderChange = (val) => {
    setCurrentTrackTime((duration / 100) * val);
  };

  return (
    <div className="flex w-full max-w-xl items-center justify-center space-x-2  text-xs text-gray">
      <CurrentTrackTime currentTrackTime={currentTrackTime} />
      <div className="flex-1">
        <Slider
          value={(currentTrackTime / duration) * 100}
          onChange={handleSliderChange}
        />
      </div>
      <PlaybackTotalTime
        currentTrackTime={currentTrackTime}
        duration={duration}
      />
    </div>
  );
}

function CurrentTrackTime({ currentTrackTime }) {
  return (
    <span className="min-w-[2rem] text-right">
      {secondsToTime(Math.round(currentTrackTime))}
    </span>
  );
}

function PlaybackTotalTime({ duration, currentTrackTime }) {
  const [displayRemainingTime, setDisplayRemainingTime] = useState(false);
  const timeToDisplay = displayRemainingTime
    ? secondsToTime(duration - Math.round(currentTrackTime))
    : secondsToTime(duration);

  const toggleTimeDisplay = () =>
    setDisplayRemainingTime(!displayRemainingTime);

  return (
    <span className="min-w-[2rem] text-xs" onClick={toggleTimeDisplay}>
      {displayRemainingTime && "-"}
      {timeToDisplay}
    </span>
  );
}
