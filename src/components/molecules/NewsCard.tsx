import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";

type Props = {
  title: string;
  description: string;
  imageUrl?: string;
  onPress: () => void;
};

export default function NewsCard({ title, description, imageUrl, onPress }: Props) {
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 2
      }}
      onPress={onPress}
    >
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={{ height: 150, borderRadius: 8 }}
          resizeMode="cover"
        />
      )}
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
        {title}
      </Text>
      <Text numberOfLines={2} style={{ color: "#555", marginTop: 4 }}>
        {description}
      </Text>
    </TouchableOpacity>
  );
}
