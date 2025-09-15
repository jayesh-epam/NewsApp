import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsRequest } from "@/store/news/slice";
import { RootState, AppDispatch } from "@/store";

export type NewsArticle = {
  title: string;
  description: string;
  urlToImage?: string;
  content?: string;
  url?: string;
};

export function useGetNews(category: string) {
  const dispatch = useDispatch<AppDispatch>();

  const { articles, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNewsRequest(category));
  }, [category, dispatch]);

  return { articles, loading, error };
}
