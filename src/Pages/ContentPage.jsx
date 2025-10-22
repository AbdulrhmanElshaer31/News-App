import Card from "../components/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default function ContentPage() {
  return (
    <div className="relative min-h-screen bg-gray-200">
      <Header />
    <div className=" h-[2px]  bg-gray-500"></div>
      <div className="flex pt-20 px-10 gap-10">
        <Sidebar />
        <Card />
      </div>
    </div>
  );
}