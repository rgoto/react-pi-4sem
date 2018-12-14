import { fork, all } from "redux-saga/effects";
import filtersSaga from "./sagas/filtersSaga";
import searchSaga from "./sagas/SearchSaga";

export default function* rootSagas() {
    yield all([
        fork(filtersSaga),
        fork(searchSaga)
    ])
}



