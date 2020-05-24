import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid, Typography } from '@material-ui/core';
import Title from '../components/title';
import MainImg from '../assets/images/tnk.jpeg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
	aboutGrid: {
		paddingTop: 60,
		paddingRight: 20,
		paddingLeft: 20,
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
	aboutTextGrid: {
		paddingRight: 40,
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
							{translate.desc}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								Full Name
							</b>
							{' : '}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>Location</b>
							{' : '}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>Skills</b>
							{' : '}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								Languages
							</b>
							{' : '}
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10 }}>
							{' '}
							<b style={{ minWidth: 100, display: 'inline-block' }}>
								Freelance
							</b>
							{' : '}
						</Typography>
						<div style={{ display: 'flex', marginTop: 40 }}>
							<Button variant="contained" color="primary">
								Download CV
							</Button>
						</div>
					</Grid>
				</Grid>
			</Grid>
			
            <Grid className={classes.aboutGrid} item container xs={12}>
				<Title title={translate.services} />
				<Grid container direction="row" className={classes.mainAbout}>

							
				</Grid>
			</Grid>
			
		</Grid>
	);
}
