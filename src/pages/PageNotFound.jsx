import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => (
  <div className="h-[60px] w-[60px]">
    <img
      src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg"
      className="h-full w-full"
      alt=""
    />
  </div>
);

const Message = () => (
  <div className="flex flex-col items-center justify-center space-y-2">
    <h1 className="text-[32px] font-bold lg:text-[48px]">Page not available</h1>
    <p className="text-gray">Something went wrong, please try again later.</p>
  </div>
);

const HomeButton = ({ navigate }) => (
  <button
    className="rounded-full bg-white px-8 py-3 font-bold text-black transition hover:scale-105"
    onClick={() => navigate("/")}
  >
    Home
  </button>
);

const HelpLink = () => (
  <a href="" className="font-bold text-white hover:underline">
    Help
  </a>
);

export const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);
  return (
    <div className=" flex h-screen w-screen items-center justify-center ">
      <div className="inline-flex  flex-col items-center justify-center space-y-4">
        <Logo />
        <Message />
        <HomeButton navigate={navigate} />
        <HelpLink />
      </div>
    </div>
  );
};
