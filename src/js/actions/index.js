import { 
  put, 
  takeEvery,
  all,
  call,
} from 'redux-saga/effects'

import { 
  ADD_ARTICLE, 
  DATA_LOADED,
  FETCH_ERROR,
  INCREMENT,
  INCREMENT_ASYNC,
  FETCH_REQUESTED,
} from '../constants/action-types'

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload,
  }
}

export function getData() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json })
      })
      .catch(error => {
        dispatch({ type: FETCH_ERROR })
      })
  }
}

export const delay = ms => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({
    type: INCREMENT,
  })
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export function* fetchData(action) {
  try {
    const res = yield call(fetch, action.payload.url)
    const json = yield res.json()
    yield put({
      type: DATA_LOADED,
      payload: json,
    })
  } catch (error) {
    yield put({
      type: FETCH_ERROR,
      payload: error.message,
    })
  }
}

export function* watchFetchData() {
  yield takeEvery(FETCH_REQUESTED, fetchData) // taskLatest is for one fetch
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    watchFetchData(),
  ])
}

export function requestFetch(url) {
  return {
    type: FETCH_REQUESTED,
    payload: {
      url,
    }
  }
}
