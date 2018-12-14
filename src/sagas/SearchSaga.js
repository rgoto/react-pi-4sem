import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import {CALL_FETCH_SEARCH, fetchSearchFailed, fetchSearchSuccess} from "../ducks/Search";
import FindYourAppAPI from "../integrations/FindYourAppAPI";


function* searchData(action) {
    const { dataSearch } = action;
    try {
        const responseDataSearch = yield call(FindYourAppAPI.fetchSearchDataFromAPI, dataSearch);
        yield put(fetchSearchSuccess(responseDataSearch));
    } catch (e) {
        yield put(fetchSearchFailed(e))
    }
}

function* fetchSearchSaga() {
    yield takeLatest(CALL_FETCH_SEARCH, searchData);
}

export default function* searchSaga() {
    yield all([
        fork(fetchSearchSaga),
    ]);
}
