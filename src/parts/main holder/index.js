import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function MainContainer(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{ backgroundColor: '#0000ff', height: '100vh' }} >
                <div  className={classes.root} >
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center" alignContent="center">
                        <Grid item xs={10} style={{paddingTop:"12%"}}>
                            <Paper className={classes.paper} variant="outlined" square><h1>{props.title}</h1></Paper>
                        </Grid>
                        <Grid item xs={8} style={{paddingTop: "4%"}} >
                           <Paper className={classes.paper} style={{backgroundColor:"yellow"}} variant="outlined" square>{props.subtitle}</Paper>
                        </Grid>
                        <Grid item xs={6} alignItems="center" style={{paddingTop:"5%"}} >
                            <Paper className={classes.paper} style={{backgroundColor:"black"}} variant="outlined" square>xs=6</Paper>
                            <Paper className={classes.paper} variant="outlined" square>xs=6</Paper>
                            <Paper className={classes.paper} variant="outlined" square>xs=6</Paper>
                        </Grid>
                        
                    </Grid>
                </div>

            </Container>
        </React.Fragment>
    );
}