import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 6026938231550,
  playlist_id: 8140311929,
  name: "Billie Jean",
  artist: "Michael Jackson",
  album: "Thriller 25 Super Deluxe Edition",
  duration: 293,
  isLiked: false,
  image: "https://i.scdn.co/image/ab67616d000048514121faee8df82c526cbab2be",
  isPlaying: false,
  isReplayEnabled: false,
};

export const playbackSlice = createSlice({
  name: "playback",
  initialState,
  reducers: {
    setPlayingTrack: (state, action) => {
      if (state.id !== action.payload.id) {
        Object.assign(state, action.payload);
      }
      state.isPlaying = true;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setIsLiked: state => {
      state.isLiked = !state.isLiked;
    },
    setIsReplayEnabled: state => {
      state.isReplayEnabled = !state.isReplayEnabled;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLiked, setIsReplayEnabled, setIsPlaying, setPlayingTrack } =
  playbackSlice.actions;

export default playbackSlice.reducer;
