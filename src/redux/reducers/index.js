import { combineReducers } from 'redux';
import feed from './feed';
import governmentNews from './governmentNews';
import greekCovidData from './greekCovidData';
import covidDataRange from './covidDataRange';

export default combineReducers({ feed, governmentNews, greekCovidData, covidDataRange });
