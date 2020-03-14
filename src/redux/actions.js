import { ADD_WHO_RSS_ITEM, ADD_WHO_RSS_ITEMS, SET_FEED_ERROR, START_FEED_LOADING, STOP_FEED_LOADING } from './actionTypes';
import { mapWHORssItem } from '../utils/rssItems';

export const addRssItem = item => ({
  type: ADD_WHO_RSS_ITEM,
  payload: mapWHORssItem(item)
});

export const addRssItems = items => ({
  type: ADD_WHO_RSS_ITEMS,
  payload: items.map(item => mapWHORssItem(item))
});

export const setFeedError = error => ({
  type: SET_FEED_ERROR,
  payload: { error }
});

export const startFeedLoading = () => ({
  type: START_FEED_LOADING
});

export const stopFeedLoading = () => ({
  type: STOP_FEED_LOADING
});
