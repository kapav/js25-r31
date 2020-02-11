import { FETCH_QUIZZES_START, FETCH_QUIZZES_SUCCESS, FETCH_QUIZZES_ERROR } from "../actions/actionTypes"

const initialState = {
  quizzes: [],
  loading: false,
  error: null
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZZES_START:
      return {
        ...state, loading: true
      }
    case FETCH_QUIZZES_SUCCESS:
      return {
        ...state, loading: false, quizzes: action.quizzes
      }
    case FETCH_QUIZZES_ERROR:
      return {
        ...state, loading: false, error: action.error
        
      }
    default:
      return state
  }
}
