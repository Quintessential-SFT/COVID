import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Typography from "@material-ui/core/Typography";
import MuiLink from "../components/utility/MuiLink";
import Box from "@material-ui/core/Box";
import FeedCard from "../components/FeedCard";
import {getWHONews} from "../actions";
import {parseString} from "xml2js";
import Grid from "@material-ui/core/Grid";

const IndexPage = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getWHONewsAction()
  }, []);

  const getWHONewsAction = () => {
    setLoading(true);
    getWHONews()
        .then(res => {
          const data = res.data;
          parseString(data, function (err, result) {
            setLoading(false);
            if (err) {
              setError(err);
              setFeedData([]);
            } else {
              setError('');
              setFeedData(result.rss.channel[0].item);
            }
          });
        })
        .catch((e) => {
          console.log(e);
          setError(`Feed data fetch failed`);
          setLoading(false);
        })
  };

  const feedCardStyle = {marginRight: 16};

  return (
      <>
        <SEO title="Home"/>
        <Box>
          <Typography variant='h1'>Hi people</Typography>
          <Typography variant='h4'>Welcome to your new Gatsby site.</Typography>
          <Typography variant='body1'>Now go build something great.</Typography>
          <MuiLink to="/page-2/" variant='body2' color='secondary'>Go to page 2</MuiLink>
          <Grid container spacing={1}>
            {feedData && Array.isArray(feedData) && feedData.map((item, ind) => {
              return (
                  <Grid item key={ind}>
                    <FeedCard
                        style={feedCardStyle}
                        title={item.title}
                        description={item.description}
                        source={"onomapigis.gr"} url={item.link[0]}
                        image={"https://source.unsplash.com/random"}/>
                  </Grid>
              )
            })}

          </Grid>
        </Box>
      </>
  )
};

export default IndexPage
