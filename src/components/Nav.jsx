import { HomeIcon, SearchIcon, SpotifyIcon } from "../icons";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const navItems = [
  {
    id: 0,
    href: "/",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    id: 1,
    href: "/search",
    label: "Search",
    icon: <SearchIcon />,
  },
  {
    id: 3,
    href: "#",
    label: "Get the App",
    icon: <SpotifyIcon />,
  },
];

export const Nav = ({ isMobile = false }) => {
  const wrapperClass = getWrapperClass(isMobile);
  return (
    <div className={wrapperClass}>
      {navItems.map((item) => (
        <RenderNavItem key={item.id} isMobile={isMobile} item={item} />
      ))}
    </div>
  );
};

const RenderNavItem = ({ isMobile, item }) => {
  const navItemClass = getNavItemClass(isMobile, item.id);
  const location = useLocation();
  const isCurrentItem = location.pathname === item.href;
  return (
    <Link to={item.href} className={navItemClass}>
      <span className="transition  [&>svg]:w-6 group-hover:[&>svg]:fill-white">
        {item.icon}
      </span>
      <span
        className={`text-gray transition group-hover:text-white ${
          isCurrentItem && "font-bold"
        }`}
      >
        {item.label}
      </span>
    </Link>
  );
};

const getWrapperClass = (isMobile) =>
  classNames("flex  bg-black sm:bg-base", [
    {
      "sm:flex-col sm:rounded-col sm:p-4 sm:space-y-1": !isMobile,
    },
  ]);

const getNavItemClass = (isMobile, itemId) =>
  classNames(
    "group flex flex-1 cursor-pointer flex-col items-center py-2 text-base text-xs",
    [
      {
        "space-y-1": isMobile,
        "sm:flex-row sm:space-x-3 sm:text-base": !isMobile,
        "sm:hidden": !isMobile && itemId == 3,
      },
    ],
  );
