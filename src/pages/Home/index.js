import React from 'react';
import { Grid, Box, makeStyles, Typography } from '@material-ui/core';

// Cards
import Info from '../../components/Cards/Info';
import Sobre from '../../components/Cards/Sobre';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    background: '#fff'
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.header}
        spacing={2}
      >
        <Grid item xs={12}>
          <Box>
            <Typography variant="h1" component="h1">Image</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Info />
        </Grid>
        <Grid item xs={12} md={8}>
          <Sobre />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
