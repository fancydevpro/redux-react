import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { addArticle } from '../actions'
import { forbiddenWordsMiddleware } from '../middleware'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
)

store.subscribe(() => console.log('subscribe callback fired!'))
store.dispatch(addArticle({
  title: 'React Redux Tutorial',
  id: 1
}))

export default store
