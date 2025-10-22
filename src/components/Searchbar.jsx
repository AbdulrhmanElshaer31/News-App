import { useState } from 'react'

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // Handle Input Value
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setResults([]);
        }
    };


  return (
    <>
        <div className='m-5'>
            {/* search input */}
            <input
            type='text'
            placeholder='🔍 Search'
            value={query}
            onChange={handleChange}
            className='px-8 py-2 rounded-full 
                    bg-white border border-[#edeff4] text-[#2E3440] focus:outline-none focus:border-[#c7cad0]'
         />
        </div>
    </>
  )
}

export default Searchbar