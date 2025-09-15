import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Feed from "./ui";

const API_KEY = "4e28d9d27d934a2792c67bf4d6f2e01e"; // replace with your key

export default function FeedContainer({ navigation }: any) {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <Feed
      articles={articles}
      onArticlePress={(article:any) =>
        navigation.navigate("Article", { article })
      }
    />
  );
}
