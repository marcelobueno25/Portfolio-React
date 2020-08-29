import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/image/error404.svg';
import Image from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: 'league-spartan-bold'
  },
  subtitle: {
    color: '#000',
    fontFamily: 'metropolis-medium',
    fontSize: '18px'
  },
  link: {
    color: '#FF5484',
    fontFamily: 'metropolis-black',
    fontSize: '30px',
    textDecoration: 'none',
    position: 'relative',
    // textUnderlinePosition: 'under',
    "&:after": {
      content: '""',
      position: 'absolute',
      left: '0',
      display: 'inline-block',
      height: '1.7em',
      width: '100%',
      borderBottom: '8px solid',
      marginTop: '5px'
    }
  },
}));

function Error404() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        xs={12}
        lg={5}>
        <Typography className={classes.title} variant="h1" component="h1">Error 404</Typography>
        <p className={classes.subtitle}>A página que você está procurando pode ter sido removida ou renomeada, ou o link que você seguiu está incorreto.</p>
        <Link className={classes.link} to="/">Ir para Home</Link>
      </Grid>

      <Grid
        item
        xs={12}
        lg={7}>
        <Image src={errorImg} alt="Ilustração de Erro 404" />
      </Grid>
    </Grid>
  );
}

export default Error404;
