import { call, put, takeEvery } from "redux-saga/effects";
import Constans from "../../utils/Constans";
import MoviesService from "../../API/services/MoviesService";

function* movieDetails(action) {
  try {
    const data = yield call(MoviesService.movieDetails, action.payload);

    if (data.status !== 200) {
      return yield put({
        type: Constans.FailFetchMovieDetails,
        payload: data,
      });
    }
    yield put({
      type: Constans.SuccessFetchMovieDetails,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: Constans.FailFetchMovieDetails,
      payload: e.message,
    });
  }
}

export function* movieDetailsSaga() {
  yield takeEvery(Constans.MovieDetailsAction, movieDetails);
}
