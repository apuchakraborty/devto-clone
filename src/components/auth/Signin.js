import React from 'react'
import {TextField, Paper, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './authstyle'


export default function Signin() {
  const classes = useStyles();

    return (
        <>
        
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
//   justify="center"
  style={{ minHeight: '100vh' }}
  className={classes.root}
>
    
<Paper className={classes.mypaper}>
<Typography variant="h4">Welcome to DEV Community
</Typography>
<Typography variant="body2">
DEV Community is a community of 555,288 amazing developers
</Typography>
<Grid item xs={10} lg={12}>
<Button className={classes.buttombutton} variant="contained" color="secondary" fullWidth>Continue with Google</Button>
<Button className={classes.buttombutton} variant="contained" color="primary" fullWidth>Continue with Facebook</Button>

<Typography variant="body2" gutterBottom m={2}>Have a password? Continue with your email address
</Typography>

            <form>
                <TextField
                label="Username"
                placeholder="Username"
                type="text"
                className={classes.myinput}
                variant="outlined"
                fullWidth
                />

<TextField
                label="Password"
                type="password"
                className={classes.myinput}
                variant="outlined"

                fullWidth
                />
<br />
<Button variant="contained" color="primary" fullWidth>Sign In</Button>
                
            </form>
            </Grid>
            </Paper>
            </Grid>
        </>
    )
}
