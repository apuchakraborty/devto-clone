import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Posts from './Posts/Posts'
import Leftbar from './layouts/Leftbar'
import Rightbar from './layouts/Rightbar'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


export default function Home() {
    const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs>
          <Leftbar />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
         <Posts />
         <Posts />
         <Posts />
         <Posts />
         <Posts />
        </Grid>
        <Grid item xs>
         <Rightbar />
        </Grid>
      </Grid>
      </Container>
    </>
  );
}
