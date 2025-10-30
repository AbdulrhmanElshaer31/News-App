class NewsApi {
  #base_url;
  #api_key;

  constructor(base_url, api_key) {
    this.#base_url = base_url;
    this.#api_key = api_key;
  }

  async getEverything(search) {
    if (!search) {
      console.warn("Missing search parameter!");
      return [];
    }

    try {
      const url = new URL(this.#base_url);
      url.searchParams.set("q", search);
      url.searchParams.set("apiKey", this.#api_key);

      const request = await fetch(url);

      if (!request.ok) {
        console.error(`HTTP Request Failed! Status: ${request.status}`);
        return [];
      }

      const response = await request.json();
      console.log("Data Loaded Correctly", response);
      return response;

    } catch (err) {
      console.error("Failed To Fetch API:", err.message);
      return [];
    }
  }
}


const news = new NewsApi("https://newsapi.org/v2/everything","944cbb0de3bd43a289e583e42cfeeb34");


//How To Use My Friend 3abedo
news.getEverything("tesla")