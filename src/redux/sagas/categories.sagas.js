import { call, put, takeEvery } from "redux-saga/effects";
import Constans from "../../utils/Constans";
import MoviesService from "../../API/services/MoviesService";

function* categories(action) {
  try {
    const data = yield call(MoviesService.categories, action.payload);

    if (data.status !== 200) {
      return yield put({
        type: Constans.FailFetchCategories,
        payload: data,
      });
    }
    yield put({
      type: Constans.SuccessFetchCategories,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: Constans.FailFetchCategories,
      payload: e.message,
    });
  }
}

export function* categoriesSaga() {
  yield takeEvery(Constans.CategoriesAction, categories);
}
