import axios from "axios";
import moment from "moment";

const COVID_API_BASE = 'https://covid-api.quintessential.gr';
const COVID_RSS_API_BASE = 'https://covid-rss.quintessential.gr';

export const getGreekCOVIDData = () => axios.get(`${COVID_API_BASE}/data/country/Greece`);
export const getCOVIDDataRange = (startDate = "01-22-2020", endDate = moment().format("MM-DD-YYYY"), countries) => {
  return axios.get(`${COVID_API_BASE}/data/range/${startDate}/${endDate}${countries ? `?countries=${countries}` : ''}`)
};

export const getNewsFeed = () => axios.get(`${COVID_RSS_API_BASE}/articles`);
export const getGovernmentNews = () => axios.get(`${COVID_RSS_API_BASE}/government/news`);
