import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FeedCard from "./FeedCard";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100]
  },
  gridContainer: {
    marginTop: 0,
    marginBottom: 0,
  }
}));

export default function NewsFeed(props) {
  const {data, ...rest} = props;

  const classes = useStyles();

  return (
      <Container maxWidth={"lg"} className={classes.root} {...rest}>
        <Grid container spacing={8} className={classes.gridContainer}>
          {data && Array.isArray(data) && data.map((item, ind) => {
            return (
                <Grid item key={ind}>
                  <FeedCard
                      title={item.title}
                      description={item.description}
                      source={"onomapigis.gr"} url={item.link[0]}
                      // image={"https://source.unsplash.com/random"}
                  />
                </Grid>
            )
          })}
        </Grid>
      </Container>
  );
}

