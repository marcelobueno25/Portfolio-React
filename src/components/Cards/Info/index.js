import React from 'react';
import { Box, makeStyles, Typography, Avatar, Card } from '@material-ui/core';
import MyImg from '../../../assets/image/my.jpg';
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
    border-color: #252A2E;
    border-image: initial;
}
`;

const useStyles = makeStyles((theme) => ({
  root: {},
  cardInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    height: '400px'
  }
}));

function Info() {
  const classes = useStyles();
  return (
    <Card className={classes.cardInfo}>
      <StyledAvatar alt="Minha Foto" src={MyImg} />
      <Typography variant="h4" component="h4" color="secondary">Marcelo Bueno Silva</Typography>
      <Typography component="p" color="secondary" paragraph="true">Desenvolvedor Front-End</Typography>
    </Card>
  );
}

export default Info;
