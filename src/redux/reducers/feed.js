import { ADD_WHO_RSS_ITEMS, ADD_WHO_RSS_ITEM, SET_FEED_ERROR, START_FEED_LOADING, STOP_FEED_LOADING } from '../actionTypes';

const initialState = {
  WHORssItems: [],
  error: false,
  loading: false
}


export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_WHO_RSS_ITEMS: {
      if (!action.payload) return state;
      const oldItems = state.WHORssItems;
      const newItems = Array.isArray(action.payload) && action.payload.filter(item => {
        const exists = oldItems.find(oldItem => item.id === oldItem.id);
        return !exists;
      })
      return {
        ...state,
        WHORssItems: [...state.WHORssItems, ...newItems]
      }
    }
    case ADD_WHO_RSS_ITEM: {
      if (!action.payload) return state;
      const oldItems = [...state.WHORssItems];
      const exists = oldItems.find(item => item.id === action.payload.id);
      if (exists) {
        return state;
      }
      return {
        ...state,
        WHORssItems: [...state.WHORssItems, action.payload]
      }
    }
    case SET_FEED_ERROR: {
      return {
        ...state,
        error: action.payload.error
      }
    }
    case START_FEED_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case STOP_FEED_LOADING: {
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