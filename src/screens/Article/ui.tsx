import React from "react";
import { ScrollView, Text, Image, View } from "react-native";

export default function Article({ article }: any) {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {article.urlToImage && (
        <Image
          source={{ uri: article.urlToImage }}
          style={{ height: 200, borderRadius: 10 }}
          resizeMode="cover"
        />
      )}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
        {article.title}
      </Text>
      <Text style={{ color: "#333", fontSize: 16 }}>{article.content}</Text>
    </ScrollView>
  );
}
