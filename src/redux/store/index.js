import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./../reducers/_export";
import sagas from "./../sagas/_export";

const sagaMiddleware = createSagaMiddleware();

const reducersCombined = combineReducers(reducers);

const store = createStore(
  reducersCombined,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagas.forEach((saga) => {
  sagaMiddleware.run(saga);
});

export { store };
