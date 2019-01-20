import { 
  ADD_ARTICLE, 
  DATA_LOADED,
  FETCH_ERROR,
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
