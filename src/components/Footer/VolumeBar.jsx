import { useEffect, useState } from "react";
import {
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeMediumIcon,
  VolumeMutedIcon,
} from "../../icons";
import { Slider } from "../Slider";

export const VolumeBar = () => {
  const [volumeLevel, setVolumeLevel] = useState(78);
  const [oldVolumeLevel, setOldVolumeLevel] = useState(0);
  const [isMute, setMute] = useState(false);

  // unmute when volume is increased
  useEffect(() => {
    if (isMute && volumeLevel > 0) setMute(false);
  }, [volumeLevel]);

  const onChange = val => {
    setVolumeLevel(val);
  };

  const toggleMute = () => {
    if (isMute) {
      setVolumeLevel(oldVolumeLevel);
    } else {
      setOldVolumeLevel(volumeLevel);
      setVolumeLevel(0);
    }
    setMute(!isMute);
  };

  return (
    <div className='col-span-3 hidden items-center justify-end  sm:flex'>
      <div className='group flex w-36 items-center '>
        <div className='group flex  p-2' onClick={toggleMute}>
          <Volume volumeLevel={volumeLevel} />
        </div>
        <div className='flex-1'>
          <Slider value={volumeLevel} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

function Volume({ volumeLevel }) {
  if (volumeLevel >= 75) {
    return <VolumeHighIcon />;
  } else if (volumeLevel >= 25) {
    return <VolumeMediumIcon />;
  } else if (volumeLevel > 0) {
    return <VolumeLowIcon />;
  } else {
    return <VolumeMutedIcon />;
  }
}
