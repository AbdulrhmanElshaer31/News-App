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
            placeholder='Search ...'
            value={query}
            onChange={handleChange}
            className='px-8 py-2 rounded-md 
                    bg-[#19485f]/10 backdrop-blur-xl border text-white border-white text-[#2E3440] focus:outline-none focus:border-[#c7cad0]'
         />
        </div>
    </>
  )
}

export default Searchbar