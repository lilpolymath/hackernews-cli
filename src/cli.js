export function cli(args) {
  console.log(args);
}

export async function results() {
  const fetch = require('node-fetch');
  const BASE_URL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10`;
  let results;

  await fetch(`${BASE_URL}`)
    .then(res => res.json())
    .then(json => {
      results = json;
    })
    .catch(err => console.log(err));

  const { hits } = results;
  console.log(parseStories(hits));
}

function parseStories(stories) {
  const parsed = stories.map(story => {
    const { created_at, title, url, author } = story;
    return { created_at, title, url, author };
  });
  return parsed;
}
