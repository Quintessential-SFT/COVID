import {getNewsFeed} from '../../requests';
import {
  startFeedLoading,
  stopFeedLoading,
  setFeedError,
  addFeedRssItems
} from '../actions';

export function getFeedData() {
  return dispatch => {
    dispatch(startFeedLoading());
    getNewsFeed()
        .then(res => {
          dispatch(stopFeedLoading());
          dispatch(addFeedRssItems(res.data));
        })
        .catch(error => {
          dispatch(setFeedError(error));
          dispatch(stopFeedLoading());
        });
  };
}
