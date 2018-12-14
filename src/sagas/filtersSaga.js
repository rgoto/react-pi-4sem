import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  CALL_FETCH_ANDROID_VERSION,
  CALL_FETCH_CATEGORY,
  CALL_FETCH_CONTENT_RATING,
  CALL_FETCH_GENRY,
  CALL_FETCH_TYPE,
  fetchAndroidVersionFailed,
  fetchAndroidVersionSuccess,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
  fetchContentRatingFailed,
  fetchContentRatingSuccess,
  fetchGenryFailed,
  fetchGenrySuccess,
  fetchTypeFailed,
  fetchTypeSuccess
} from "../ducks/Filters";
import FindYourAppAPI from "../integrations/FindYourAppAPI";

function* fetchCategory() {
  try {
    const data = yield call(FindYourAppAPI.fetchCallCaterogyAPI);

    let newData = Object.keys(data).map(key => {
      data[key].name = data[key].name.replace(/_/g, " ");
      return data[key];
    });

    yield put(fetchCategoriesSuccess(newData));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

function* fetchGenry() {
  try {
    const data = yield call(FindYourAppAPI.fetchCallGenryAPI);

    let newData =  Object.keys(data).map(key => data[key]);

    yield put(fetchGenrySuccess(newData));
  } catch (error) {
    yield put(fetchGenryFailed(error));
  }
}

function* fetchType() {
  try {
    const data = yield call(FindYourAppAPI.fetchCallTypeAPI);

    yield put(fetchTypeSuccess(data));
  } catch (error) {
    yield put(fetchTypeFailed(error));
  }
}

function* fetchAndroidVersion() {
  try {
    const data = yield call(FindYourAppAPI.fetchCallAndroidVersionAPI);

    let newData = Object.keys(data).map(key => {
      data[key].name = data[key].name.replace("and up", "");
      return data[key];
    });


    yield put(fetchAndroidVersionSuccess(newData));
  } catch (error) {
    yield put(fetchAndroidVersionFailed(error));
  }
}

function* fetchContentRating() {
  try {
    const data = yield call(FindYourAppAPI.fetchCallContentRatingAPI);

    let newData = Object.keys(data).map(key => data[key]);

    yield put(fetchContentRatingSuccess(newData));
  } catch (error) {
    yield put(fetchContentRatingFailed(error));
  }
}

function* fetchCategorySaga() {
  yield takeLatest(CALL_FETCH_CATEGORY, fetchCategory);
}

function* fetchGenrySaga() {
  yield takeLatest(CALL_FETCH_GENRY, fetchGenry);
}

function* fetchTypeSaga() {
  yield takeLatest(CALL_FETCH_TYPE, fetchType);
}

function* fetchAndroidVersionSaga() {
  yield takeLatest(CALL_FETCH_ANDROID_VERSION, fetchAndroidVersion);
}

function* fetchContentRatingSaga() {
  yield takeLatest(CALL_FETCH_CONTENT_RATING, fetchContentRating);
}

export default function* filtersSaga() {
  yield all([
    fork(fetchCategorySaga),
    fork(fetchTypeSaga),
    fork(fetchGenrySaga),
    fork(fetchAndroidVersionSaga),
    fork(fetchContentRatingSaga)
  ]);
}
