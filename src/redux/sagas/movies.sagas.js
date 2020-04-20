import { call, put, takeEvery } from "redux-saga/effects";
import Constans from "./../../utils/Constans";
import MovieService from "./../../API/services/MovieService";

function* movie(action) {
  try {
    const data = yield call(MovieService.trending, action.payload);

    if (data.status !== 200) {
      return yield put({
        type: Constans.FailFetchTrending,
        payload: data,
      });
    }
    yield put({
      type: Constans.SuccessFetchTrending,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: Constans.FailFetchTrending,
      payload: e.message,
    });
  }
}

export function* moviesSaga() {
  yield takeEvery(Constans.trendingAction, movie);
}
