import React from "react";
import { FlatList, View } from "react-native";
import NewsCard from "@/components/molecules/NewsCard";
import Button from "@/components/atoms/Button";

export default function Feed({
  articles,
  categories,
  selectedCategory,
  onCategoryChange,
  onArticlePress,
}: any) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <Button
            label={item.label}
            isActive={item.key === selectedCategory}
            onPress={() => onCategoryChange(item.key)}
          />
        )}
      />

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
    </View>
  );
}
