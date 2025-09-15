// import { useEffect, useState } from "react";
// import { NEWS_API_KEY, NEWS_API_ENDPOINT } from "@env";

export type NewsArticle = {
  title: string;
  description: string;
  urlToImage?: string;
  content?: string;
  url?: string;
};

// export function useGetNews(category: string) {
//   const [articles, setArticles] = useState<NewsArticle[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let isMounted = true;

//     const fetchNews = async () => {
//       setLoading(true);
//       setError(null);
//       setArticles([]); 

//       try {
//         const res = await fetch(
//           `${NEWS_API_ENDPOINT}&category=${category}&apiKey=${NEWS_API_KEY}`
//         );
//         const data = await res.json();

//         if (isMounted) {
//           if (data.articles) {
//             setArticles(data.articles);
//           } else {
//             setError("No articles found");
//           }
//         }
//       } catch (err: any) {
//         if (isMounted) setError(err.message || "Something went wrong");
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };

//     fetchNews();

//     return () => {
//       isMounted = false; 
//     };
//   }, [category]);

//   return { articles, loading, error };
// }
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsRequest } from "@/store/news/slice";
import { RootState, AppDispatch } from "@/store";

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
