import { createStore } from 'redux'
import rootReducer from '../reducers'
import { addArticle } from '../actions'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => console.log('subscribe callback fired!'))
store.dispatch(addArticle({
  title: 'React Redux Tutorial',
  id: 1
}))

export default store
