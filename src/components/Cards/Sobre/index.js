import React from 'react';
import { Card, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {},
  boxBiography: {
    borderRadius: '5px',
    height: '400px'
  }
}));

function Sobre() {
  const classes = useStyles();
  return (
    <Card className={classes.boxBiography} p={3}>
      <Typography variant="h5" component="h5" color="secondary">Sobre mim</Typography>
      <Typography component="p" color="secondary" paragraph="true">
        Hello World! Meu nome é Marcelo. Sou desenvolvedor Web e apaixonado pela area, e procuro aprender uma nova habilidade todos os dias. Sou honesto, comunicável, responsável e sempre pronto para trabalhar em algo novo.
        Com 2 anos de experiência como desenvolvedor profissional, adquiri habilidades e conhecimento necessário.
      </Typography>
    </Card>
  );
}

export default Sobre;
