import {getGovernmentNews} from '../../requests';
import {
  startGovernmentLoading,
  stopGovernmentLoading,
  setGovernmentError,
  addGovernmentRssItems
} from '../actions';

export function getGovernmentData() {
  return dispatch => {
    dispatch(startGovernmentLoading());
    getGovernmentNews()
        .then(res => {
          dispatch(stopGovernmentLoading());
          dispatch(addGovernmentRssItems(res.data.eody));
        })
        .catch(error => {
          dispatch(setGovernmentError(error));
          dispatch(stopGovernmentLoading());
        });
  };
}
