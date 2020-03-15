import { combineReducers } from 'redux';
import feed from './feed';
import greekCovidData from './greekCovidData';

export default combineReducers({ feed, greekCovidData });