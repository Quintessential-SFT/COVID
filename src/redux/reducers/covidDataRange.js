import {
  SET_COVID_DATA_RANGE, SET_COVID_DATA_RANGE_ERROR,
  START_COVID_DATA_RANGE_LOADING,
  STOP_COVID_DATA_RANGE_LOADING,
} from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COVID_DATA_RANGE: {
      return {
        ...state,
        data: action.payload
      }
    }
    case SET_COVID_DATA_RANGE_ERROR: {
      return {
        ...state,
        error: action.payload.error
      }
    }
    case START_COVID_DATA_RANGE_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case STOP_COVID_DATA_RANGE_LOADING: {
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
