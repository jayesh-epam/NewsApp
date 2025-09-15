import React from "react";
import { TouchableOpacity, Text } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  isActive?: boolean;
};

export default function Button({ label, onPress, isActive = false }: Props) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: isActive ? "#007BFF" : "#E0E0E0",
      }}
      onPress={onPress}
    >
      <Text style={{ color: isActive ? "#fff" : "#000", fontWeight: "600" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
