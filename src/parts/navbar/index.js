import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import {green} from '@material-ui/core/colors';



import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Navbar(props){
const classes = useStyles();
  return (
    <AppBar style={{ background: '#2E3B55' }}>
      <Toolbar >
      <a href="#!" className="brand-logo"><i className="material-icons">cloud</i></a>
    <Typography variant="h5" className={classes.title}>
    Laurentino's Portfolio
    </Typography>
    <Button>{props.info}</Button>
    <Button><InfoIcon></InfoIcon></Button>
    <Button style={{color: green[500]}}><InfoIcon></InfoIcon></Button>
  </Toolbar>
    </AppBar>

  );
}




