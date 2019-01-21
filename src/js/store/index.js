import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import test from 'tape'
import {
  put,
  call,
} from 'redux-saga/effects'

import rootReducer from '../reducers'
import { 
  addArticle, 
  watchIncrementAsync, 
  incrementAsync, 
  rootSaga,
  delay,
} from '../actions'
import { forbiddenWordsMiddleware } from '../middleware'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'  
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
})

store.subscribe(() => console.log('subscribe callback fired! ', store.getState()))
store.dispatch(addArticle({
  title: 'React Redux Tutorial',
  id: 1
}))

export default store
