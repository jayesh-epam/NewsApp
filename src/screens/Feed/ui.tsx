import React from "react";
import { FlatList, TouchableOpacity, Text, View, Image } from "react-native";

export default function Feed({ articles, onArticlePress }: any) {
  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 8,
            backgroundColor: "#fff",
            elevation: 2,
          }}
          onPress={() => onArticlePress(item)}
        >
          {item.urlToImage && (
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: 150, borderRadius: 8 }}
              resizeMode="cover"
            />
          )}
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={{ color: "#555", marginTop: 4 }}>
            {item.description}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
