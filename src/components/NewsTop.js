import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    marginTop: 0,
    marginBottom: 0,
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
    border: '1px solid rgba(0, 0, 0, 0.87)',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(2)
  }
}));

export default function NewsTop(props) {
  const {title, description, totalCases, dailyCases, deaths, ...rest} = props;

  const classes = useStyles();

  return (
      <Grid container spacing={8} alignItems={"center"} className={classes.root} {...rest}>
        <Grid item md={6} xs={12} className={classes.container}>
          <Typography gutterBottom variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item xs={12} container alignItems={"center"} className={classes.titleContainer}>
                <Box className={classes.dot}/>
                <Typography variant={"body1"}>Live στατιστικά:</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>
                  <Typography variant={"body2"}>Σύνολο κρουσμάτων</Typography>
                  <Typography variant={"h6"}>{totalCases ? totalCases : '-'}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>
                  <Typography variant={"body2"}>Τελευταίες 24 ώρες</Typography>
                  <Typography variant={"h6"}>{dailyCases ? dailyCases : '-'}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>
                  <Typography variant={"body2"}>Θάνατοι</Typography>
                  <Typography variant={"h6"}>{deaths ? deaths : "-"}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
  );
}

