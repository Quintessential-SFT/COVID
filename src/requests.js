import axios from "axios";

const COVID_API_BASE = 'https://covid-api.quintessential.gr';
const COVID_RSS_API_BASE = 'https://covid-rss.quintessential.gr';

export const getGreekCOVIDData = () => axios.get(`${COVID_API_BASE}/data/country/Greece`);
export const getNewsFeed = () => axios.get(`${COVID_RSS_API_BASE}/articles`);
export const getGovernmentNews = () => axios.get(`${COVID_RSS_API_BASE}/government/news`);
