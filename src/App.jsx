import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { isMobile } from "react-device-detect";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer/Footer";

const MobileLayout = () => (
  <div className='mx-auto flex min-h-0 w-full max-w-[1955px] flex-col'>
    <div className='min-h-screen bg-base'>
      <Outlet />
    </div>
    <div className='sticky bottom-0 z-20 flex flex-col-reverse'>
      <Nav isMobile={true} />
      <Footer />
    </div>
  </div>
);

const DesktopLayout = () => (
  <div className='wrapper mx-auto flex h-screen min-h-0 w-full max-w-[1955px] flex-col sm:grid sm:gap-2 sm:p-2'>
    <div className='sidebar order-3'>
      <Sidebar />
    </div>
    <div className='main-view order-1 min-h-0 flex-1 overflow-y-scroll bg-base pb-2 sm:rounded-col sm:pb-0'>
      <Outlet />
    </div>
    <Footer />
  </div>
);

const App = () => (isMobile ? <MobileLayout /> : <DesktopLayout />);

export default App;
