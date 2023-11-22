import { configureStore } from "@reduxjs/toolkit";
import playbackSlice from "./playbackSlice";

export const store = configureStore({
  reducer: {
    playback: playbackSlice,
  },
});
