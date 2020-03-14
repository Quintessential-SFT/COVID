import { getWHONews } from '../../requests';
import { addRssItems, startFeedLoading, stopFeedLoading, setFeedError } from '../actions';
import xml2js from 'xml2js';

export function getWHOData() {
  return dispatch => {
    dispatch(startFeedLoading());
    getWHONews()
      .then(res => {
        const data = res.data;
        return xml2js.parseStringPromise(data);
      })
      .then(res => {
        const data = res.rss.channel[0].item;
        dispatch(stopFeedLoading());
        dispatch(addRssItems(data));
      })
      .catch(error => {
        dispatch(setFeedError(error));
        dispatch(stopFeedLoading());
      });
  }
}