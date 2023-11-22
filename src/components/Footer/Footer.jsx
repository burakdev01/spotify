import { NowPlayingBar } from "./NowPlaying";
import { PlaybackBar } from "./PlaybackBar";
import { VolumeBar } from "./VolumeBar";

export const Footer = () => {
  return (
    <div className="footer order-2 grid-cols-12 bg-black  sm:grid sm:p-2">
      <NowPlayingBar />
      <PlaybackBar />
      <VolumeBar />
    </div>
  );
};
