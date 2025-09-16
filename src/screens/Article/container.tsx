import React from "react";
import Article from "./ui";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Article">;

export default function ArticleContainer({ route }: Props) {
  const { article } = route.params;
  return <Article article={article} />;
}
