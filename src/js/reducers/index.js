import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, FETCH_ERROR } from '../constants/action-types'

const initialState = {
  articles: [],
  remoteArticles: [],
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      error_bad_word: false,
    })
  } else if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      error_bad_word: true, 
    })
  } else if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
      error_fetch: false,
    })
  } else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, {
      error_fetch: true,
    })
  }
  return state
}

export default rootReducer
