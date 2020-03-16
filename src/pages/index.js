import React, {useEffect} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import NewsTop from "../components/NewsTop";
import NewsFeed from "../components/NewsFeed";
import {makeStyles} from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import { getFeedData } from '../redux/thunks';
import { getGreekCovidData } from '../redux/thunks';
import {graphql} from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100]
  },
}));

const IndexPage = ({data}) => {
  const feed = useSelector(state => state.feed);
  const greekCovidData = useSelector(state => state.greekCovidData);
  const { data: covidData } = greekCovidData;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreekCovidData());
    dispatch(getFeedData());
  }, []);

  if (!data || !data.prismicNews) return '';
  const { data: pageData } = data.prismicNews;

  return (
      <>
        <SEO title="Τελευταία νέα"/>
        <Box className={classes.root}>
          <NewsTop title={pageData.title}
                   description={pageData.description}
                   totalCases={covidData ? covidData.Confirmed: null}
                   recoveredCases={covidData ? covidData.Recovered: null}
                   deaths={covidData ? covidData.Deaths: null}/>
          <NewsFeed data={feed.FeedRssItems} loading={feed.loading}/>
        </Box>
      </>
  )
};

export default IndexPage;

export const newsPageQuery = graphql`
    query NewsPage {
        prismicNews {
            data {
                title
                description
            }
        }
    }
`;

