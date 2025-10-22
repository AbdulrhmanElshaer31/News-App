import Header from "../components/Header.jsx";
import Cards from "../components/Cards.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function ContentPage() {
  return (
   <>
     {/* Parent (Body) */}
        <div className="w-full h-screen  items-center justify-center p-4 flex  bg-gray-200">
        {/* Container */}
        <div className="relative w-full max-w-7xl h-full  flex gap-8">
        {/* SideBar Section */}
        <div className=" flex items-center justify-center">
            <Sidebar></Sidebar>
        </div>
        {/* Header & Cards In The Same Section */}
        {/* Header Section */}
        <div className="flex-1 flex flex-col gap-4">
        <div><Header></Header></div>
        {/* Cards Section */}
        <div className="overflow-auto"><Cards></Cards></div>
        </div>
        </div>
        </div>
   </>
  );
}
