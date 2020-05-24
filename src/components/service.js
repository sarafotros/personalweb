import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/PhoneAndroid'


const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 30,
	},
	main: {
		backgroundColor: '#191d2b',
		border: '1px solid #2e344e',
		borderTop: '5px solid #2e344e',
		padding: theme.spacing(8),
		transition: '.4s',
		'&:hover': {
			borderTopColor: theme.palette.primary.main,
			transition: '.4s',
		},
	},
}));

export default function Service() {
    const classes = useStyles()
    return (
        <Grid item lg={4} md={6} xs={12}  className={classes.root} >
            <Grid className={classes.main} container>
                <PhoneIcon/>
            </Grid>
        </Grid>
    )
}
 