import { MixIcon, PrevMediaIcon, NextMediaIcon, ReplayIcon } from "../../icons";
import { useSelector } from "react-redux";
import { usePlaybackActions } from "../../hooks/usePlaybackActions";
import { memo } from "react";
import { TogglePlayButton } from "../TogglePlayButton";
import { playlistsData } from "../../dummyData/playlistsData";

const ControlButtons = ({ setCurrentTrackTime }) => {
  const playingPlaylistId = useSelector(state => state.playback.playlist_id);
  const playingTrackId = useSelector(state => state.playback.id);
  const isReplayEnabled = useSelector(state => state.playback.isReplayEnabled);

  const { setPlayingTrack, setIsReplayEnabled } = usePlaybackActions();

  const findCurrentPlaylist = () =>
    playlistsData.find(playlist => playlist.id === playingPlaylistId);

  const changeTrack = delta => {
    const playlist = findCurrentPlaylist();
    const currentTrackIndex = playlist.tracks.findIndex(
      track => track.id === playingTrackId
    );
    const newTrackIndex = currentTrackIndex + delta;
    if (newTrackIndex >= 0 && newTrackIndex < playlist.tracks.length) {
      setPlayingTrack(playlist.tracks[newTrackIndex], playingPlaylistId);
    } else {
      setCurrentTrackTime(0);
    }
  };

  const playPreviousTrack = () => changeTrack(-1);
  const playNextTrack = () => changeTrack(1);

  const playRandomTrack = () => {
    const playlist = findCurrentPlaylist();
    const randomTrackIndex = Math.floor(Math.random() * playlist.tracks.length);
    setPlayingTrack(playlist.tracks[randomTrackIndex], playingPlaylistId);
  };
  return (
    <div className=' flex items-center justify-center space-x-6'>
      <ControlButton onPointerUp={playRandomTrack}>
        <MixIcon />
      </ControlButton>

      <ControlButton onPointerUp={playPreviousTrack}>
        <PrevMediaIcon />
      </ControlButton>

      <div className='flex h-[32px] w-[32px] cursor-default items-center justify-center rounded-full bg-white  transition active:scale-90 [&>*>svg]:fill-black'>
        <TogglePlayButton />
      </div>

      <ControlButton onPointerUp={playNextTrack}>
        <NextMediaIcon />
      </ControlButton>

      <ControlButton
        className={`${isReplayEnabled && "[&>*>svg]:fill-spotify"}`}
        onPointerUp={setIsReplayEnabled}
      >
        <ReplayIcon />
      </ControlButton>
    </div>
  );
};

function ControlButton({ className, onPointerUp, children }) {
  return (
    <button
      className={`${className} flex items-center justify-center`}
      onPointerUp={onPointerUp}
    >
      <span className='m-[-0.375rem] p-1.5'>{children}</span>
    </button>
  );
}

export const PlaybackControlButtons = memo(ControlButtons);
