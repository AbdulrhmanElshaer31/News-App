import Header from "../components/Header.jsx";
import Cards from "../components/Cards.jsx";
import Sidebar from "../components/Sidebar.jsx";
import "../App.css";

export default function ContentPage() {
  return (
    <>
      {/* background image */}
      <div className="min-h-screen bg-site bg-cover bg-no-repeat flex flex-col-reverse md:flex-row items-center justify-center md:gap-30 py-10 md:py-0">
  
  {/* sidebar */}
  <div className="w-full fixed bottom-0 md:static md:w-auto">
    <Sidebar />
  </div>

  {/* main app */}
  <div className="h-[600px] bg-[#19485f]/30 backdrop-blur-lg border border-[#d9e0a4]/50 rounded-xl md:h-[600px] md:static fixed top-7">
    <Header />
    <hr className="text-amber-50" />
    <div className="h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent custom-scroll mt-2 mr-3">
      <Cards />
    </div>
  </div>

</div>

    </>
  );
}
