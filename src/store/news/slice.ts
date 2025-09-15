import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle } from "@/hooks/useGetNews";

export type NewsState = {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  category: string;
};

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
  category: "general",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    fetchNewsRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.category = action.payload;
      state.articles = [];
    },
    fetchNewsSuccess(state, action: PayloadAction<NewsArticle[]>) {
      state.articles = action.payload;
      state.loading = false;
    },
    fetchNewsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } =
  newsSlice.actions;

export default newsSlice.reducer;
