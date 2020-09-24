import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 25,
  },
  media: {
    height: 140,
  },
});

export default (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.restaurant.featured_image}
          title='Gado-gado'
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='h2'>
            {props.data.restaurant.name}
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            color='textSecondary'
            component='p'
          >
            {props.data.restaurant.location.address} timings
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.data.restaurant.timings}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          style={{ backgroundColor: '#3F51B6', color: '#fff' }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
