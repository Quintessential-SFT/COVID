import {getCOVIDDataRange, getGreekCOVIDData} from '../../requests';
import {
  startGreekCovidDataLoading,
  stopGreekCovidDataLoading,
  setGreekCovidData,
  setGreekCovidDataError,
  setCovidDataRange,
  stopCovidDataRangeLoading,
  setCovidDataRangeError,
  startCovidDataRangeLoading,
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

export function getCovidDataRange(startDate, endDate, countries) {
  return dispatch => {
    dispatch(startCovidDataRangeLoading());
    getCOVIDDataRange(startDate, endDate, countries)
      .then(res => {
        dispatch(setCovidDataRange(res.data));
        dispatch(stopCovidDataRangeLoading());
      })
      .catch(error => {
        dispatch(setCovidDataRangeError(error));
        dispatch(stopCovidDataRangeLoading());
      });
  };
}
