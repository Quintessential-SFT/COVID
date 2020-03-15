import axios from "axios";

const COVID_API_BASE = 'https://covid-api.quintessential.gr';
const NEWSFEED_API_BASE = 'http://51.138.41.255';

export const getGreekCOVIDData = () => axios.get(`${COVID_API_BASE}/data/country/Greece`);
export const getNewsFeed = () => axios.get(`${NEWSFEED_API_BASE}/articles`);
