import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
        <div className="m-4 md:m-10 md:flex md:flex-row md:items-center md:justify-around flex flex-col items-center">
            {/* Logo */}
            <h2 className='text-xl font-bold font-serif'>ALL <span className='bg-red-500 text-white font-light rounded-xs'>news</span></h2>
            {/* Search Bar */}
            <Searchbar />
        </div>
    </>
  )
}

export default Header