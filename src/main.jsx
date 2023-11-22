import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Search } from "./pages/search/Search.jsx";
import { Feed } from "./pages/Feed.jsx";
import { Playlist } from "./pages/playlist/Playlist.jsx";
import { PageNotFound } from "./pages/PageNotFound.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "playlist/:currentPlaylistId",
        element: <Playlist />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
