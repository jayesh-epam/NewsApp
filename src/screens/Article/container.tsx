import React from "react";
import Article from "./ui";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NewsArticle } from "@/hooks/useGetNews";

type RootStackParamList = {
  Feed: undefined;
  Article: { article: NewsArticle };
};

type Props = NativeStackScreenProps<RootStackParamList, "Article">;

export default function ArticleContainer({ route }: Props) {
  const { article } = route.params;
  return <Article article={article} />;
}
