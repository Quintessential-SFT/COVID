import {
  ADD_GOVERNMENT_RSS_ITEM,
  ADD_GOVERNMENT_RSS_ITEMS,
  SET_GOVERNMENT_ERROR,
  START_GOVERNMENT_LOADING, STOP_GOVERNMENT_LOADING
} from "../actionTypes";

const initialState = {
  GovernmentNewsRssItems: [],
  error: false,
  loading: false
}


export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_GOVERNMENT_RSS_ITEMS: {
      if (!action.payload) return state;
      const oldItems = state.GovernmentNewsRssItems;
      const newItems = Array.isArray(action.payload) && action.payload.filter(item => {
        const exists = oldItems.find(oldItem => item.title === oldItem.title);
        return !exists;
      })
      return {
        ...state,
        GovernmentNewsRssItems: [...state.GovernmentNewsRssItems, ...newItems]
      }
    }
    case ADD_GOVERNMENT_RSS_ITEM: {
      if (!action.payload) return state;
      const oldItems = [...state.GovernmentNewsRssItems];
      const exists = oldItems.find(item => item.title === action.payload.title);
      if (exists) {
        return state;
      }
      return {
        ...state,
        GovernmentNewsRssItems: [...state.GovernmentNewsRssItems, action.payload]
      }
    }
    case SET_GOVERNMENT_ERROR: {
      return {
        ...state,
        error: action.payload.error
      }
    }
    case START_GOVERNMENT_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case STOP_GOVERNMENT_LOADING: {
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
