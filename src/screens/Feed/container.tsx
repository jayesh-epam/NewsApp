import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Feed from "./ui";
import { NewsArticle, useGetNews } from "@/hooks/useGetNews";

export default function FeedContainer({ navigation }: any) {
  const { articles, loading, error } = useGetNews();

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
      onArticlePress={(article: NewsArticle) =>
        navigation.navigate("Article", { article })
      }
    />
  );
}
