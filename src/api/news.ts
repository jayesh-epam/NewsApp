import { NEWS_API_KEY, NEWS_API_ENDPOINT } from "@env";

export async function fetchNewsApi(category: string) {
  const url = `${NEWS_API_ENDPOINT}&category=${category}&apiKey=${NEWS_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}
