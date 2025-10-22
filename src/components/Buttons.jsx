export default function Buttons({name,icon}) {
    return(
        <button className="relative group
              text-white bg-gray-300
              p-4 rounded-4xl
              hover:bg-gray-400
              transition duration-300
              flex items-center justify-center">
            {icon}
            <span 
            className="
                absolute left-full ml-2
                top-1/2 -translate-y-1/2
                bg-gray-300 text-black px-3 py-1 rounded-3xl shadow-md
                opacity-0 translate-x-[-10px] 
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 ease-out
                whitespace-nowrap
              ">{name}</span>
        </button>
    );
}