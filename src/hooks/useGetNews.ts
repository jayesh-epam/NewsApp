import { useEffect, useState } from "react";
import { NEWS_API_KEY, NEWS_API_ENDPOINT } from "@env";

export type NewsArticle = {
  title: string;
  description: string;
  urlToImage?: string;
  content?: string;
  url?: string;
};

export function useGetNews() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${NEWS_API_ENDPOINT}&apiKey=${NEWS_API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError("No articles found");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { articles, loading, error };
}
