import {
  SET_FEED_ERROR,
  START_FEED_LOADING,
  STOP_FEED_LOADING,
  START_GREEK_COVID_DATA_LOADING,
  STOP_GREEK_COVID_DATA_LOADING,
  SET_GREEK_COVID_DATA,
  SET_GREEK_COVID_DATA_ERROR,
  ADD_FEED_RSS_ITEM,
  ADD_FEED_RSS_ITEMS,
  ADD_GOVERNMENT_RSS_ITEM,
  ADD_GOVERNMENT_RSS_ITEMS,
  SET_GOVERNMENT_ERROR,
  START_GOVERNMENT_LOADING, STOP_GOVERNMENT_LOADING
} from './actionTypes';

export const addFeedRssItem = item => ({
  type: ADD_FEED_RSS_ITEM,
  payload: item
});

export const addFeedRssItems = items => ({
  type: ADD_FEED_RSS_ITEMS,
  payload: items
});

export const setFeedError = error => ({
  type: SET_FEED_ERROR,
  payload: {error}
});

export const startFeedLoading = () => ({
  type: START_FEED_LOADING
});

export const stopFeedLoading = () => ({
  type: STOP_FEED_LOADING
});

export const startGreekCovidDataLoading = () => ({
  type: START_GREEK_COVID_DATA_LOADING
});

export const stopGreekCovidDataLoading = () => ({
  type: STOP_GREEK_COVID_DATA_LOADING
});

export const setGreekCovidData = data => ({
  type: SET_GREEK_COVID_DATA,
  payload: data
});

export const setGreekCovidDataError = error => ({
  type: SET_GREEK_COVID_DATA_ERROR,
  payload: {error}
});

export const addGovernmentRssItem = item => ({
  type: ADD_GOVERNMENT_RSS_ITEM,
  payload: item
});

export const addGovernmentRssItems = items => ({
  type: ADD_GOVERNMENT_RSS_ITEMS,
  payload: items
});

export const setGovernmentError = error => ({
  type: SET_GOVERNMENT_ERROR,
  payload: {error}
});

export const startGovernmentLoading = () => ({
  type: START_GOVERNMENT_LOADING
});

export const stopGovernmentLoading = () => ({
  type: STOP_GOVERNMENT_LOADING
});
