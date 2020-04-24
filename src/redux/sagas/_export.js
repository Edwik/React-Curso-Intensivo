import { loginSaga } from "./login.sagas";
import { moviesSaga } from "./movies.sagas";
import { categoriesSaga } from "./categories.sagas";
import { movieDetailsSaga } from "./movieDetails.sagas";

export default [loginSaga, moviesSaga, categoriesSaga, movieDetailsSaga];
