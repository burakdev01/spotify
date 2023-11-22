import { Library } from "./Library";
import { Nav } from "../Nav";

export const Sidebar = () => {
  return (
    <div onClick={() => {}} className="min-h-0 flex-col space-y-2 sm:flex  ">
      <Nav />
      <Library />
    </div>
  );
};
