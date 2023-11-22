import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PlaylistTracks } from "./PlaylistTracks";

import { playlistsData } from "../../dummyData/playlistsData";
import { GreenPlayButton } from "../../components/GreenPlayButton";
import { PlaylistHeader } from "./PlaylistHeader";

export const Playlist = () => {
  const navigate = useNavigate();
  const { currentPlaylistId } = useParams();

  const playlist = playlistsData.find(
    (playlist) => playlist.id == currentPlaylistId,
  );

  useEffect(() => {
    if (!playlist) {
      return navigate("/404");
    }
    document.title = playlist.name + " - playlist";
  }, [currentPlaylistId]);

  if (playlist) {
    return (
      <div className="flex flex-col">
        <PlaylistHeader {...playlist} />

        <div className="m-4 mt-5 flex h-14 w-14">
          <GreenPlayButton playlist={playlist} />
        </div>

        <PlaylistTracks tracks={playlist.tracks} />
      </div>
    );
  }
};
