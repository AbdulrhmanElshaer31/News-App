import axios from "axios";

const getBreakingNews = async (query) => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${query.toLowerCase()}&apiKey=0370bfd5e5b4406c917242d5f09cb200`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }
};

export default getBreakingNews;