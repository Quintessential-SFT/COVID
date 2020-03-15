import {
  SET_FEED_ERROR,
  START_FEED_LOADING,
  STOP_FEED_LOADING,
  ADD_FEED_RSS_ITEM,
  ADD_FEED_RSS_ITEMS
} from '../actionTypes';

const initialState = {
  FeedRssItems: [],
  error: false,
  loading: false
}


export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_FEED_RSS_ITEMS: {
      if (!action.payload) return state;
      const oldItems = state.FeedRssItems;
      const newItems = Array.isArray(action.payload) && action.payload.filter(item => {
        const exists = oldItems.find(oldItem => item.title === oldItem.title);
        return !exists;
      })
      return {
        ...state,
        FeedRssItems: [...state.FeedRssItems, ...newItems]
      }
    }
    case ADD_FEED_RSS_ITEM: {
      if (!action.payload) return state;
      const oldItems = [...state.FeedRssItems];
      const exists = oldItems.find(item => item.title === action.payload.title);
      if (exists) {
        return state;
      }
      return {
        ...state,
        FeedRssItems: [...state.FeedRssItems, action.payload]
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
