import React, { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Feed from "./ui";
import { NewsArticle, useGetNews } from "@/hooks/useGetNews";

const categories = [
  {label: "Business", key:"business"},
  {label: "General", key:"general"},
  {label: "Science", key:"science"},
  {label: "Sports", key:"sports"},
];

export default function FeedContainer({ navigation }: any) {
  const [category, setCategory] = useState("general");
  const { articles, loading, error } = useGetNews(category);

  if (loading) return <ActivityIndicator size="large" />;
  if (error)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
      </View>
    );

  return (
    <Feed
      articles={articles}
      categories={categories}
      selectedCategory={category}
      onCategoryChange={setCategory}
      onArticlePress={(article: NewsArticle) =>
        navigation.navigate("Article", { article })
      }
    />
  );
}
