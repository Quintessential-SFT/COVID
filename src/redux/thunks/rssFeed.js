import { getWHONews } from '../../requests';
import { addRssItems } from '../actions';
import xml2js from 'xml2js';

export function getWHOData() {
  return dispatch => {
    getWHONews()
      .then(res => {
        const data = res.data;
        return xml2js.parseStringPromise(data);
      })
      .then(res => {
        const data = res.rss.channel[0].item;
        dispatch(addRssItems(data));
      })
      .catch(error => {
        // TODO handle this error with redux
      })
  }
}