import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import MuiLink from "./utility/MuiLink";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 354,
  },
  media: {
    height: 135,
  },
  content: {
    position: 'relative',
    height: 244,
    overflow: 'hidden'
  },
  fade: {
    position: 'absolute',
    width: '100%',
    height: theme.spacing(2),
    background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
    bottom: 0,
    left: 0,
  },
  cardActions: {
    justifyContent: 'space-between'
  }
}));

export default function FeedCard(props) {
  const {title, description, source, image, url, ...rest} = props;

  const classes = useStyles();

  return (
      <Card className={classes.root} {...rest}>
        <MuiLink url={url} underline={'none'}>
          <CardActionArea>
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {description}
              </Typography>
              <Box className={classes.fade}/>
            </CardContent>
          </CardActionArea>
        </MuiLink>
        <CardActions className={classes.cardActions}>
          <Typography variant="body2">
            {source}
          </Typography>
          <MuiLink url={url} underline={'none'}>
            <Button variant={'outlined'} size="small" color="secondary">
              Διαβασε περισσοτερα
            </Button>
          </MuiLink>
        </CardActions>
      </Card>
  );
}

