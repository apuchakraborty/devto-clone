import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Leftmenu from './Leftmenu'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

export default function Leftbar() {
  const classes = useStyles();
  

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h4">
        DEV Community is a community of 553,934 amazing developers
        </Typography>
     
      </CardContent>
      <CardActions className={classes.sociallogin}>
        <Button variant="contained" color="primary">Create new account</Button>
      </CardActions>
    </Card>
    <Leftmenu />
    </>
  );
}
