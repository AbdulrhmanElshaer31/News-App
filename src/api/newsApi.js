import axios from "axios";

const apikey = import.meta.env.API_KEY;

const url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2025-10-26&' +
          'sortBy=popularity&' +
          `apiKey=${apikey}`;

const req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })