import axios from "axios";

const WHONews_URL = 'https://www.who.int/rss-feeds/news-english.xml';

export const getWHONews = () => axios.get(WHONews_URL);
