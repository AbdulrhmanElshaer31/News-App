import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="m-5">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        className="px-8 py-2 rounded-md 
                   bg-[#19485f]/10 backdrop-blur-xl border text-white border-white 
                   focus:outline-none focus:border-[#c7cad0]"
      />
    </div>
  );
};

export default Searchbar;