import React from 'react';
import { Grid, Box, makeStyles, Typography, Avatar } from '@material-ui/core';
import MyImg from '../../assets/image/my.jpg';
import styled from 'styled-components';

const StyledAvatar = styled(Avatar)`
  border: 4px solid #723891;
  height: 180px;
  width: 180px;
  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    border-color: #eee;
    border-image: initial;
}
`;

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    background: theme.palette.primary.main
  },
  boxBiography: {
    background: '#eee',
    borderRadius: '5px',
    height: '400px'
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
            <Typography variant="h1" component="h1">Header</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box className={classes.boxBiography} p={3}>
            <StyledAvatar alt="Minha Foto" src={MyImg} />
            <Typography variant="h5" component="h5">Marcelo Bueno Silva</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className={classes.boxBiography} p={3}>
            <Typography variant="h5" component="h5">Sobre mim</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
