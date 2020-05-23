import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import './home.css'

const useStyle = makeStyles(theme => ({
    root: {
       minHeight:'100vh',
   }
}))

export default function HomeScreen() {
    const classes = useStyle()

    return (
        <Grid container xs={12} className={classes.root}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </Grid>
     );
}
