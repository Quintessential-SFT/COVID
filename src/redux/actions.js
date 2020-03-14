import { ADD_WHO_RSS_ITEM, ADD_WHO_RSS_ITEMS } from './actionTypes';
import { mapWHORssItem } from '../utils/rssItems';

export const addRssItem = item => ({
  type: ADD_WHO_RSS_ITEM,
  payload: mapWHORssItem(item)
});

export const addRssItems = items => ({
  type: ADD_WHO_RSS_ITEMS,
  payload: items.map(item => mapWHORssItem(item))
});

