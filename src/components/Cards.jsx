import React, { useEffect, useState } from "react";
import getBreakingNews from "../api/newsApi";

const Cards = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getBreakingNews(query);
      if (data && data.articles) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [query]);

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
              className="flex flex-col
                         bg-white/10 backdrop-blur-md rounded-lg shadow-md 
                         hover:shadow-lg transition-all duration-200 
                         w-[90%] sm:w-48 md:w-52 lg:w-56 xl:w-60 h-80"
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
    </div>
  );
};

export default Cards;