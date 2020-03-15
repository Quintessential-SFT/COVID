import {getGreekCOVIDData} from '../../requests';
import {
  startGreekCovidDataLoading,
  stopGreekCovidDataLoading,
  setGreekCovidData,
  setGreekCovidDataError
} from '../actions';

export function getGreekCovidData() {
  return dispatch => {
    dispatch(startGreekCovidDataLoading());
    getGreekCOVIDData()
        .then(res => {
          dispatch(setGreekCovidData(res.data[0]));
          dispatch(stopGreekCovidDataLoading());
        })
        .catch(error => {
          dispatch(setGreekCovidDataError(error));
          dispatch(stopGreekCovidDataLoading());
        });
  };
}
