import React from "react";
import Article from "./ui";

export default function ArticleContainer({ route }: any) {
  const { article } = route.params;
  return <Article article={article} />;
}
