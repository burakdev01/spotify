import { useDispatch } from "react-redux";
import {
  setIsLiked,
  setIsReplayEnabled,
  setIsPlaying,
  setPlayingTrack,
} from "../redux/playbackSlice";

export const usePlaybackActions = () => {
  const dispatch = useDispatch();

  const actions = {
    setIsLiked: () => dispatch(setIsLiked()),

    setIsReplayEnabled: () => dispatch(setIsReplayEnabled()),

    setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying)),

    setPlayingTrack: (track, playlist_id) =>
      dispatch(
        setPlayingTrack({ ...track, playlist_id: parseInt(playlist_id) }),
      ),
  };

  return {
    ...actions,
  };
};
