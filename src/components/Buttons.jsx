export default function Buttons({ name, icon }) {
  return (
    <button
      className="relative group
        text-white 
        p-2 rounded-4xl
        hover:bg-gray-400
        transition duration-300
        flex items-center justify-center"
    >
      {icon}
      <span
        className="
          absolute
          bg-gray-300 text-black px-3 py-1 rounded-3xl shadow-md
          opacity-0 group-hover:opacity-100 
          transition-all duration-300 ease-out whitespace-nowrap

          left-1/2 -translate-x-1/2 bottom-full mb-2 translate-y-[10px] group-hover:translate-y-0

          md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-2 md:bottom-auto md:translate-x-[-10px] md:group-hover:translate-x-0 md:group-hover:translate-y-[-50%]
        "
      >
        {name}
      </span>
    </button>
  );
}
