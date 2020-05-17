// https://hn.algolia.com/api/v1/search_by_date?tags=story

const fetch = require('node-fetch');
const BASE_URL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10`;
let results;

fetch(`${BASE_URL}`)
  .then(res => res.json())
  .then(json => {
    results = json;
  });

console.log(results);
