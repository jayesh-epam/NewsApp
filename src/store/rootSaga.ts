import { all } from "redux-saga/effects";
import watchNewsSaga from "./news/saga";

export default function* rootSaga() {
  yield all([watchNewsSaga()]);
}
