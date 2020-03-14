import { SET_GREEK_COVID_DATA, SET_GREEK_COVID_DATA_ERROR, START_GREEK_COVID_DATA_LOADING, STOP_GREEK_COVID_DATA_LOADING } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_GREEK_COVID_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
    case SET_GREEK_COVID_DATA_ERROR: {
      return {
        ...state,
        error: action.payload.error
      }
    }
    case START_GREEK_COVID_DATA_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case STOP_GREEK_COVID_DATA_LOADING: {
      return {
        ...state,
        loading: false
      }
    }
    default: {
      return state;
    }
  }
}
