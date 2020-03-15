import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {headerHeight} from "./Layout";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FeedCard from "./FeedCard";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: `calc(100vh - ${headerHeight}px)`,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white
  },
  rootVariant: {
    backgroundColor: theme.palette.grey[100]
  },
  container: {
    minHeight: `calc(100vh - ${headerHeight}px)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  gridContainer: {
    marginTop: 0,
    marginBottom: 0,
  },
  underline: {
    height: 3,
    width: 166,
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
    background: theme.palette.common.black,
  },
  underlinePrimary: {
    background: theme.palette.primary.main
  },
  underlineSecondary: {
    background: theme.palette.secondary.main
  },
}));

export default function NewsFrontPage(props) {
  const {title, data, loading = false, color = 'primary', variant = false, ...rest} = props;

  const classes = useStyles();

  return (
      <Box
          className={variant ? clsx(classes.root, classes.rootVariant) : classes.root} {...rest}>
        <Container maxWidth={"lg"} className={classes.container}>
          {title &&
          <Box p={4} className={classes.titleBox}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Box
                className={color === 'primary' ? clsx(classes.underline, classes.underlinePrimary)
                    : color === 'secondary' ? clsx(classes.underline, classes.underlineSecondary)
                        : classes.underline}/>
          </Box>
          }
          <Box p={4} display={"flex"} alignItems={"center"} justifyContent={'center'} flex={1}>
            <Grid container spacing={2} alignItems={"center"} justify={'center'} className={classes.gridContainer}>
              {data && Array.isArray(data) && data.slice(0, 3).flatMap((item, ind) => {
                return (
                    <Grid item key={ind}>
                      <FeedCard
                          title={item.title}
                          description={item.description}
                          source={"onomapigis.gr"} url={item.link}
                          // image={"https://source.unsplash.com/random"}
                      />
                    </Grid>
                )
              })}
              {loading &&
                    <Grid item xs={12} container justify={'center'}>
                      <CircularProgress color={color} />
                    </Grid>
              }
            </Grid>
          </Box>
        </Container>
      </Box>
  );
}

