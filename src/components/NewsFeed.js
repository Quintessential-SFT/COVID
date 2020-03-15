import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FeedCard from "./FeedCard";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    overflow: 'hidden'
  },
  gridContainer: {
    margin: 0,
    width: '100%',
  },
  gridItem: {
    maxWidth: '100%'
  }
}));

export default function NewsFeed(props) {
  const {data, loading = false, ...rest} = props;

  const classes = useStyles();

  return (
      <Container maxWidth={"lg"} className={classes.root} {...rest}>
        <Grid container spacing={8} className={classes.gridContainer}>
          {data && Array.isArray(data) && data.map((item, ind) => {
            return (
                <Grid key={item.id ? item.id : `feed-card-${ind}`} item className={classes.gridItem}>
                  <FeedCard
                      title={item.title}
                      description={item.description}
                      source={item.source} url={item.link}
                      image={item.image}
                  />
                </Grid>
            )
          })}
          {loading &&
          <Grid item xs={12} container justify={'center'}>
            <CircularProgress />
          </Grid>
          }
        </Grid>
      </Container>
  );
}

