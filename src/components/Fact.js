import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {headerHeight} from "./Layout";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: `calc(100vh - ${headerHeight}px)`,
    display: 'flex',
    alignItems: 'center'
  },
  rootPrimary: {
    backgroundColor: theme.palette.grey[100]
  },
  rootSecondary: {
    backgroundColor: theme.palette.common.white
  },
  container: {
    maxWidth: 540,
  },
  mythText: {
    color: '#CC0000',
    fontWeight: 'bold'
  },
  factText: {
    color: '#219653',
    fontWeight: 'bold'
  },
  underline: {
    height: 6,
    width: '100%',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
    background: theme.palette.common.black,
  },
  underlineMyth: {
    background: "#CC0000"
  },
  underlineFact: {
    background: "#219653"
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
}));

export default function Fact(props) {
  const {myth, fact, description, image, variant = false, ...rest} = props;

  const classes = useStyles();

  const mythTypography = () => {
    if (!myth) return null;
    return (
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
              <span className={classes.mythText}>
                {`Μύθος: `}
              </span>
            <span>
                {myth}
              </span>
          </Typography>
          <Box className={clsx(classes.underline, classes.underlineMyth)}/>
        </Box>
    )
  };

  const factTypography = () => {
    if (!fact) return null;
    return (
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
              <span className={classes.factText}>
                {`Γεγονός: `}
              </span>
            <span>
                {fact}
              </span>
          </Typography>
          <Box className={clsx(classes.underline, classes.underlineFact)}/>
        </Box>
    )
  };

  return (
      <Box
          className={variant ? clsx(classes.root, classes.rootSecondary) : clsx(classes.root, classes.rootPrimary)} {...rest}>
        <Container maxWidth={"lg"}>
          <Grid container alignItems={"center"} direction={variant ? 'row-reverse' : 'row'}>
            <Grid item md={6} xs={12} container justify={variant ? "flex-end" : "flex-start"}>
              <Box p={2}>
                <img src={image} alt={''} className={classes.image}/>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} container justify={variant ? "flex-start" : "flex-end"}>
              <Box p={2} className={classes.container}>
                {mythTypography()}
                {description && description.split('\n').flatMap((paragraph, ind) => (
                    <Typography key={ind} paragraph variant="body1" color="textSecondary" component="p">
                      {paragraph}
                    </Typography>
                ))}
                {factTypography()}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}

