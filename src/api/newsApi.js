class NewsApi {
  #base_url;
  #api_key;

  constructor(base_url, api_key) {
    this.#base_url = base_url;
    this.#api_key = api_key;
  }

  async #fetchData(endpoint, params = {}) {
    try {
      const url = new URL(`${this.#base_url}/${endpoint}`);
      url.searchParams.set("apiKey", this.#api_key);

      for (const [key, value] of Object.entries(params)) {
        if (value) url.searchParams.set(key, value);
      }

      const response = await fetch(url);

      if (!response.ok) {
        console.error(`HTTP Request Failed! Status: ${response.status}`);
        return [];
      }

      const data = await response.json();
      // console.log(`Data loaded from: ${endpoint}`, data);
      return data;

    } catch (err) {
      console.error("Failed to Fetch API:", err.message);
      return [];
    }
  }

  async getEverything(search, language = "en", sortBy = "publishedAt") {
    if (!search) {
      console.warn("Missing search parameter!");
      return [];
    }
    return this.#fetchData("everything", { q: search, language, sortBy });
  }

  async getTopHeadlines(country = "us", category = "", q = "") {
    return this.#fetchData("top-headlines", { country, category, q });
  }

  async getSources(category = "", language = "en", country = "") {
    return this.#fetchData("sources", { category, language, country });
  }

  static getApiVersion() {
    return "v2";
  }
}

const news = new NewsApi("https://newsapi.org/v2", "944cbb0de3bd43a289e583e42cfeeb34");

/*
everything object & top headliens (same structure my friend 3abido) structure: ATTENTION (انا عايز جاتووووووه)

const article = {
  author: "mliss1578", // name of the article's author
  title: "‘Love & Hip Hop: Hollywood’ Star Masika Kalysha Mourns Her Late Husband...", // full title of the article
  description: "In a letter shared on social media...", // short summary or preview text
  content: "Jamar Champ, Love &amp; Hip Hop: Hollywoodstar Masika Kalysha‘s husband...", // partial article content (first paragraph)
  url: "https://decider.com/2025/10/30/love-hip-hop-hollywood-masika-kalysha-late-husband-crash/", // link to the full article
  urlToImage: "https://decider.com/wp-content/uploads/2025/10/masika-kalysha-jamar-champ.jpg", // image URL for the article
  publishedAt: "2025-10-30T19:00:53Z", // date and time when the article was published
  source: { // information about the article's source
    id: null, // source ID (if available)
    name: "Decider" // name of the source
  }
};

=============================================================
sources object structure:
const source = {
  id: "abc-news", // unique ID of the news source
  name: "ABC News", // name of the news source
  description: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.", // short description of the source
  url: "https://abcnews.go.com", // official website URL of the source
  category: "general", // type of news (e.g., general, sports, technology)
  language: "en", // language code of the source
  country: "us" // country code of the source
};


*/


// Example usage my friend 3abido:
news.getEverything("tesla").then(data=>console.log(data.articles[0]));

news.getTopHeadlines("us", "technology").then(data=>console.log(data.articles[0]));
news.getSources().then(data=>console.log(data.sources[0]));



