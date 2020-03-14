import { ADD_WHO_RSS_ITEMS, ADD_WHO_RSS_ITEM } from '../actionTypes';

const initialState = {
  WHORssItems: []
}


export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_WHO_RSS_ITEMS: {
      if (!action.payload) return;
      return {
        ...state,
        WHORssItems: [...state.WHORssItems, ...action.payload]
      }
    }
    case ADD_WHO_RSS_ITEM: {
      if (!action.payload) return;
      return {
        ...state,
        WHORssItems: [...state.WHORssItems, action.payload]
      }
    }
    default: {
      return state;
    }
  }
}