import Card from "../components/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function ContentPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="bg-[#ECEFF4]/70 backdrop-blur-xl rounded-2xl shadow-lg">
          <Header />
          <div className="h-[2px] bg-gray-500 my-2"></div>
          <Card />
        </div>
      </div>
    </div>
  );
}
