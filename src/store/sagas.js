import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import { getUsers } from "./apis";

function* fetchUser(action) {
  const user = yield call(getUsers, action.count);
  // yield delay(2000);

  console.log("action: ", action);
  yield put({ type: "ADD", payload: { count: action.count, user: user } });
}

function* mySaga() {
  yield takeLatest("ADD_ASYNC", fetchUser);
}

export default mySaga;
