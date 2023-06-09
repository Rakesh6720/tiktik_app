import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Home from "./home/page";

const App: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
