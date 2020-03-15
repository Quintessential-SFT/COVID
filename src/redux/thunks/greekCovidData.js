import { getGreekCOVIDData } from '../../requests';
import { startGreekCovidDataLoading, stopGreekCovidDataLoading, setGreekCovidData, setGreekCovidDataError } from '../actions';

export function getGreekCovidData() {
  return dispatch => {
    dispatch(startGreekCovidDataLoading());
    getGreekCOVIDData()
      .then(res => {
        const timeout = setTimeout(() => {
          dispatch(setGreekCovidData(res.data[0]));
          dispatch(stopGreekCovidDataLoading());
          clearTimeout(timeout);
        }, 100);
      })
      .catch(error => {
        dispatch(setGreekCovidDataError(error));
        dispatch(stopGreekCovidDataLoading());
      });
  };
}
