import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Video from "./Video";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#122787'
  },
  rootVariant: {
    backgroundColor: theme.palette.common.white
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.common.white
  },
  titleBoxVariant: {
    color: theme.palette.common.black
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

export default function VideoSection(props) {
  const {title, embedUrl, variant = false, ...rest} = props;

  const classes = useStyles();

  return (
      <Box
          className={variant ? clsx(classes.root, classes.rootVariant) : classes.root} {...rest}>
        <Container maxWidth={"lg"} className={classes.container}>
          {title &&
          <Box p={4} className={variant ? clsx(classes.titleBox, classes.titleBoxVariant) : classes.titleBox}>
            <Typography gutterBottom variant="h5" component="h2" color={"inherit"}>
              {title}
            </Typography>
            <Box className={!variant ? clsx(classes.underline, classes.underlinePrimary)
                : clsx(classes.underline, classes.underlineSecondary)}/>
          </Box>
          }
          {embedUrl &&
          <Box p={4} display={"flex"} alignItems={"center"} justifyContent={'center'} flex={1} width={'100%'}>
            <Video videoSrcURL={embedUrl} videoTitle={title}/>
          </Box>
          }
        </Container>
      </Box>
  );
}

