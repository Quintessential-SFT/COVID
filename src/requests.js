import axios from "axios";

const COVID_API_BASE = 'https://covid-api.quintessential.gr';
const WHONews_URL = 'https://www.who.int/rss-feeds/news-english.xml';

export const getGreekCOVIDData = () => axios.get(`${COVID_API_BASE}/data/country/Greece`);

export const getWHONews = () => axios.get(WHONews_URL);
