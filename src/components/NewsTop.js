import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import MuiLink from "./utility/MuiLink";
import LiveDataSection from "./LiveDataSection";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(3)
  },
  titleContainer: {
    marginBottom: theme.spacing(2)
  },
  dot: {
    backgroundColor: "#FF4752",
    borderRadius: '50%',
    height: 12,
    width: 12,
    marginRight: theme.spacing(1)
  },
  borderBox: {
    height: '100%',
    border: '1px solid rgba(0, 0, 0, 0.87)',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  source: {
    fontSize: 12
  }
}));

export default function NewsTop(props) {
  const {title, description, totalCases, recoveredCases, deaths, ...rest} = props;

  const classes = useStyles();

  return (
    <Container maxWidth={"lg"} className={classes.root} {...rest}>
      <Grid container alignItems={"center"}>
        <Grid item md={6} xs={12} className={classes.container}>
          <Box p={2}>
            <Typography gutterBottom variant="h4" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box p={2}>
            <LiveDataSection totalCases={totalCases} recoveredCases={recoveredCases} deaths={deaths}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

