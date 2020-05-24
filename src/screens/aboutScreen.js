import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid, Typography } from '@material-ui/core';
import Title from '../components/title';
import MainImg from '../assets/images/tnk.jpeg';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
	aboutGrid: {
		paddingTop: 60,
		paddingRight: 30,
		paddingLeft: 30,
	},
	mainImg: {
		width: '100%',
		height: '100%',
	},
	mainAbout: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	},
	nameText: {
		color: theme.palette.primary.main,
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
}));

export default function AboutScreen() {
	const translate = getTranslate();
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid className={classes.aboutGrid} item container xs={12}>
				<Title title={translate.aboutme} />
				<Grid container direction="row" className={classes.mainAbout}>
					<Grid item xs={12} md={6}>
						<img
							className={classes.mainImg}
							src={MainImg}
							alt={translate.name}
						/>
					</Grid>
					<Grid item xs={12} md={6} style={{paddingLeft:15, paddingRight:15}}>
						<Typography variant="h3">{translate.IAm}
							<span className={classes.nameText}> {translate.name} </span>
							{translate.hi2}
						</Typography>
						<Typography variant="body1" style={{marginTop: 10}}>{translate.desc}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
