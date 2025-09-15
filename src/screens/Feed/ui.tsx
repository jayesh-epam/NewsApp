import React from "react";
import { FlatList } from "react-native";
import NewsCard from "@/components/molecules/NewsCard";

export default function Feed({ articles, onArticlePress }: any) {
  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <NewsCard
          title={item.title}
          description={item.description}
          imageUrl={item.urlToImage}
          onPress={() => onArticlePress(item)}
        />
      )}
    />
  );
}
