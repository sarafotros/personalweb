import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		// minHeight: '100vh',
		width: '100%',
		padding: 10,
		display: 'flex',
		alignItems: 'flex-start',
	},
	progressDiv: {
		display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
	},
}));
export default function Skill() {

	const classes = useStyles();

    return (
			<div className={classes.root}>
				<Typography variant="h6">HTML%</Typography>
				<div className={classes.progressDiv}>
					<Typography variant="body1">80%</Typography>
				</div>
			</div>
		);
}
