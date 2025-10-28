import React from "react";

const Cards = () => {
  const cards = Array.from({ length: 16 });

  return (
    <>
      <div className="my-5">
        {/* container with fixed height and scroll */}
        <div className="px-4">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {cards.map((_, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition-all duration-200 
               w-[90%] sm:w-48 md:w-52 lg:w-56 xl:w-60"
              >
                <img
                  className="rounded-t-lg object-cover 
                 h-32 sm:h-36 md:h-40 lg:h-44 w-full"
                  src="src/components/download.png"
                  alt="not-found"
                />

                <div className="p-2 sm:p-3">
                  <h3
                    className="font-semibold mb-1 sm:mb-2 
                     text-white text-xs sm:text-sm md:text-base"
                  >
                    World News - Broadcast Graphic.
                  </h3>

                  <div
                    className="flex justify-between text-gray-300 
                      text-[10px] sm:text-xs md:text-sm"
                  >
                    <p>World</p>
                    <p>2 November 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
