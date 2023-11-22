import { usePlaybackActions } from "../../hooks/usePlaybackActions";
import { LikeIcon, FilledLikeIcon } from "../../icons";
import { useSelector } from "react-redux";

import { TogglePlayButton } from "../TogglePlayButton";

export const NowPlayingBar = () => {
  return (
    <div className='flex min-w-0 items-center justify-center space-x-2 bg-sticky-playing-bar ps-2 sm:col-span-3 sm:space-x-4 sm:bg-transparent sm:p-0'>
      <TrackImage />
      <div className='flex min-w-0 flex-1 items-center  sm:space-x-3'>
        <TrackInfo />
        <ControlButtons />
      </div>
    </div>
  );
};

function TrackInfo() {
  const artistName = useSelector(state => state.playback.artist);
  const trackName = useSelector(state => state.playback.name);
  return (
    <div className='flex min-w-0 flex-col text-[0.813rem]'>
      <span className='truncate text-sm'> {trackName} </span>
      <span className='truncate text-xs text-gray'>{artistName}</span>
    </div>
  );
}
function TrackImage() {
  const image = useSelector(state => state.playback.image);
  return <img src={image} alt='' className='h-10  w-10 sm:h-14 sm:w-14 ' />;
}

function ControlButtons() {
  return (
    <div className='ml-auto flex h-14  items-center justify-center sm:ml-0'>
      <LikeTrackButton />
      <PlayButton />
    </div>
  );
}

function LikeTrackButton() {
  const { setIsLiked } = usePlaybackActions();
  const isLiked = useSelector(state => state.playback.isLiked);

  const IconWrapper = ({ className, children }) => (
    <span className={`sm:p-1.5 [&>svg]:w-5 sm:[&>svg]:w-4 ${className}`}>
      {children}
    </span>
  );

  return (
    <span
      className='group flex h-full w-12 cursor-pointer items-center justify-center p-2 sm:w-8'
      onClick={setIsLiked}
    >
      {isLiked ? (
        <IconWrapper className='[&>svg]:fill-spotify'>
          <FilledLikeIcon />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <LikeIcon />
        </IconWrapper>
      )}
    </span>
  );
}

function PlayButton() {
  return (
    <button className='mr-2 flex h-full w-12 items-center justify-center sm:hidden [&>*>svg]:w-5'>
      <TogglePlayButton />
    </button>
  );
}
