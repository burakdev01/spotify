import React, { useEffect, useRef, useState } from "react";
import { Explore } from "./Explore";
import classNames from "classnames";
import { SearchIcon } from "../../icons";

const SearchInput = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchWrapperRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!searchWrapperRef.current.contains(event.target)) {
        setIsSearchActive(false);
      } else {
        setIsSearchActive(true);
        searchInputRef.current.focus();
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setIsSearchActive]);

  useEffect(() => {
    if (isSearchActive) {
      searchInputRef.current.focus();
    }
  }, [isSearchActive]);

  const searchInputWrapperClass = classNames([
    'flex-1 transition cursor-text sm:w-96 bg-[#242424] hover:bg-[#2A2A2A] flex space-x-2 p-4 rounded-full relative after:content-[""] after:absolute after:w-full after:h-full after:pointer-events-none after:left-0 after:bottom-0 after:top-p after:right-0 after:rounded-full after:transition',
    {
      "after:border-2 after:border-white": isSearchActive,
      "hover:after:border after:border-neutral-600": !isSearchActive,
    },
  ]);

  return (
    <div className={searchInputWrapperClass} ref={searchWrapperRef}>
      <span className="flex cursor-default items-center">
        <SearchIcon />
      </span>
      <input
        type="text"
        ref={searchInputRef}
        placeholder="What do you want to listen to?"
        className="w-full  bg-transparent text-sm placeholder-[#777777] outline-none"
      />
    </div>
  );
};

export const Search = () => {
  useEffect(() => {
    document.title = "Spotify - Search";
  }, []);

  return (
    <div className="flex h-full flex-col space-y-4 p-4">
      <SearchInput />
      <Explore />
    </div>
  );
};
