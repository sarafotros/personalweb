import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: 20,
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
	iconStyle: {
		fontSize: 46,
		color: theme.palette.primary.main,
	},
	title: {
		textAlign: 'left',
	},
	description: {
		cursor: 'pointer',
		transition: '.4s',
		"&:hover": {
			color: theme.palette.primary.main,
			transition: '.4s'
		}
	},
	divIcon: {
		margin: 10,
		padding: 10,
		paddingBottom: 5,
		border: '1px solid #2e344e',
		marginRight: 25,
	},
	typoText: {
		display: 'flex',
		flexDirection: 'column',
		flex:1,
	}
}));

export default function ContactBox({ title, text1,text2, icon }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid
				className={classes.main}
				container
				direction="row"
				alignItems="center"
				justify="flex-start"
			>
				<div className={classes.divIcon}>{icon}</div>

				<div className={classes.typoText}>
					<Typography className={classes.title} variant="h6">
						{title}
					</Typography>
					<Typography variant="body1" className={classes.description}>
						{text1}
					</Typography>
					<Typography variant="body1" className={classes.description}>
						{text2}
					</Typography>
				</div>
			</Grid>
		</div>
	);
}
