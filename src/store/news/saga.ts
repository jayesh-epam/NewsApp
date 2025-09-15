import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "./slice";
import { NewsArticle } from "@/hooks/useGetNews";
import { fetchNewsApi } from "@/api/news";

function* fetchNewsSaga(action: ReturnType<typeof fetchNewsRequest>) {
  try {
    const data: { articles: NewsArticle[] } = yield call(
      fetchNewsApi,
      action.payload
    );

    if (data.articles.length > 0) {
      yield put(fetchNewsSuccess(data.articles));
    } else {
      yield put(fetchNewsFailure("No articles found"));
    }
  } catch (err: any) {
    yield put(fetchNewsFailure(err.message || "Something went wrong"));
  }
}

export default function* watchNewsSaga() {
  yield takeLatest(fetchNewsRequest.type, fetchNewsSaga);
}
