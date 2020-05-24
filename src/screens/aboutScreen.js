import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid, Typography } from '@material-ui/core';
import Title from '../components/title';
import MainImg from '../assets/images/tnk.jpeg';
import Button from '@material-ui/core/Button';
import Service from '../components/service'

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
	aboutGrid: {
		paddingTop: 60,
		paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20
	},
	mainImg: {
		width: '100%',
		height: '100%',
	},
    // imageGrid: {
    //    width: '90%',
	//    height: '90%',  
    // },
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
	aboutTextGrid: {
		paddingRight: 30,
		paddingLeft: 20,
		[theme.breakpoints.down('xs')]: {
			padding: 0,
			marginTop: 10,
		},
	},
}));

export default function AboutScreen() {
	const translate = getTranslate();
	const classes = useStyles();
	return (
		<Grid
			justify="flex-start"
			alignItems="flex-start"
			container
			className={classes.root}
		>
			<Grid className={classes.aboutGrid} item container xs={12}>
				<Title title={translate.aboutme} />
				<Grid container direction="row" className={classes.mainAbout}>
					<Grid className={classes.imageGrid} item xs={12} md={6}>
						<img
							className={classes.mainImg}
							src={MainImg}
							alt={translate.name}
						/>
					</Grid>
					<Grid className={classes.aboutTextGrid} item xs={12} md={6}>
						<Typography variant="h3">
							{translate.IAm}
							<span className={classes.nameText}> {translate.name} </span>
							{translate.hi2}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{translate.desc2}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								{translate.fullname}
							</b>
							{' : '} {translate.name}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								{translate.location}
							</b>
							{' : '}
							{translate.uk}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								{translate.skills}
							</b>
							{' : '}
							{translate.js}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								{translate.languages}
							</b>
							{' : '}
							{translate.eng}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								{translate.freelance}
							</b>
							{' : '}
							{translate.available}
						</Typography>
						<div style={{ display: 'flex', marginTop: 40 }}>
							<Button variant="contained" color="primary">
								{translate.downloadcv}
							</Button>
						</div>
					</Grid>
				</Grid>
			</Grid>

			<Grid className={classes.aboutGrid} item container xs={12}>
				<Title title={translate.services} />
				<Grid container direction="row" className={classes.mainAbout}>
					<Service />
					<Service />
					<Service />
				</Grid>
			</Grid>
		</Grid>
	);
}
