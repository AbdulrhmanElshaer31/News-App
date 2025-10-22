import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
        <div className="m-10 flex items-center justify-around">
            {/* Logo */}
            <h2 className='text-xl font-bold font-serif'>ALL <span className='bg-red-500 text-white font-light rounded-xs'>news</span></h2>
            {/* Search Bar */}
            <Searchbar />
        </div>
    </>
  )
}

export default Header