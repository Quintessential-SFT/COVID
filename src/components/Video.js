import React from "react"
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  }
}));

const Video = ({ videoSrcURL, ...rest }) => {
  const classes = useStyles();

  return (
      <Box className={classes.root} {...rest}>
        <iframe
            className={classes.iframe}
            src={videoSrcURL}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
      </Box>
  )
};

export default Video
