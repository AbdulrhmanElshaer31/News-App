import React, { useEffect, useState } from "react";
import news from "../api/newsApi";

const Cards = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await news.getEverything(query);
      if (data && data.articles) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [query]);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    const dialog = document.getElementById("newsDialog");
    dialog.showModal();
  };

  const handleClose = () => {
    const dialog = document.getElementById("newsDialog");
    dialog.close();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="my-5 px-4">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(article)}
              className="flex flex-col
                         bg-white/10 backdrop-blur-md rounded-lg shadow-md 
                         hover:shadow-lg transition-all duration-200 
                         w-[90%] sm:w-48 md:w-52 lg:w-56 xl:w-60 h-80 cursor-pointer"
            >
              <img
                className="rounded-t-lg object-cover h-40 w-full"
                src={
                  article.urlToImage || "https://via.placeholder.com/300x200"
                }
                alt={article.title || "not-found"}
              />

              <div className="flex flex-col justify-between flex-grow p-3">
                <h3 className="font-semibold text-white text-sm md:text-base line-clamp-2">
                  {article.title}
                </h3>

                <div className="flex justify-between text-gray-300 text-xs mt-2">
                  <p>{article.source.name}</p>
                  <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-4">No news found.</p>
        )}
      </div>

      <dialog
        id="newsDialog"
        className="relative rounded-xl w-11/12 md:w-2/3 lg:w-1/2 
            text-white shadow-2xl p-0 overflow-hidden
            bg-[#19485f]/30 backdrop-blur-lg border border-[#d9e0a4]/50"
      >
        {selectedArticle && (
          <div className="flex flex-col">
            {/* Header image */}
            <img
              src={
                selectedArticle.urlToImage ||
                "https://via.placeholder.com/300x200"
              }
              alt={selectedArticle.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-bold">{selectedArticle.title}</h2>
              <p className="text-sm text-gray-300">
                {selectedArticle.description}
              </p>

              <div className="flex justify-between text-xs text-gray-400 mt-3">
                <span>{selectedArticle.source.name}</span>
                <span>
                  {new Date(selectedArticle.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <a
                href={selectedArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Read full article
              </a>
            </div>

            {/* Footer */}
            <div className="flex justify-end p-3 bg-[#0f172a]/60">
              <button
                onClick={handleClose}
                className="px-4 py-1 rounded-md bg-white/20 hover:bg-white/30 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default Cards;
