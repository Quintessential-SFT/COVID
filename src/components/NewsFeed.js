import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FeedCard from "./FeedCard";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    marginTop: 0,
    marginBottom: 0,
  },
}));

export default function NewsFeed(props) {
  const {data, ...rest} = props;

  const classes = useStyles();

  return (
      <Grid className={classes.root} container spacing={4} {...rest}>
        {data && Array.isArray(data) && data.map((item, ind) => {
          return (
              <Grid item key={ind}>
                <FeedCard
                    title={item.title}
                    description={item.description}
                    source={"onomapigis.gr"} url={item.link[0]}
                    image={"https://source.unsplash.com/random"}/>
              </Grid>
          )
        })}

      </Grid>
  );
}

