import { useEffect, useState } from "react";
import { NEWS_API_KEY, NEWS_API_ENDPOINT } from "@env";

export type NewsArticle = {
  title: string;
  description: string;
  urlToImage?: string;
  content?: string;
  url?: string;
};

export function useGetNews(category: string) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      setArticles([]); // clear old data while fetching new category

      try {
        const res = await fetch(
          `${NEWS_API_ENDPOINT}&category=${category}&apiKey=${NEWS_API_KEY}`
        );
        const data = await res.json();

        if (isMounted) {
          if (data.articles) {
            setArticles(data.articles);
          } else {
            setError("No articles found");
          }
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchNews();

    return () => {
      isMounted = false; // cleanup
    };
  }, [category]);

  return { articles, loading, error };
}
