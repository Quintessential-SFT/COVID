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

const useStyles = makeStyles({
  root: {
    maxWidth: 354,
  },
  media: {
    height: 135,
  },
  cardActions: {
    justifyContent: 'space-between'
  }
});

export default function FeedCard(props) {
  const {title, paragraph, source, image, url, ...rest} = props;

  const classes = useStyles();

  return (
      <Card className={classes.root} {...rest}>
        <CardActionArea>
          <CardMedia
              className={classes.media}
              image={image}
              title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {paragraph}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Typography variant="body2">
            {source}
          </Typography>
          {url &&
          <MuiLink url={url} underline={'none'}>
            <Button variant={'outlined'} size="small" color="secondary">
              Διαβασε περισσοτερα
            </Button>
          </MuiLink>
          }
        </CardActions>
      </Card>
  );
}

