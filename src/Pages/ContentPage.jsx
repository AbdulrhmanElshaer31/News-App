import Header from "../components/Header.jsx";
import Cards from "../components/Cards.jsx";
import Sidebar from "../components/Sidebar.jsx";
import "../App.css";

export default function ContentPage() {
  return (
      <div className="p-5 flex gap-4 h-4/5 justify-center">
        <div className="p-2 hidden justify-center items-center  sm:flex">
          {/* SideBar */}
          <Sidebar></Sidebar>
        </div>
        <div className="p-2 flex flex-col gap-2">
          {/* Header - Sidebar(Mobile Vision) -  Cards */}
          <div>
              {/* Header */}
              <Header></Header>
          </div>
          <div className="p-2 flex justify-center items-center  sm:hidden">
            <Sidebar></Sidebar>
          </div>
          <div className="overflow-auto custom-sidebar">
            <Cards></Cards>
          </div>
        </div>
      </div>
  );
}
