import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid, Typography } from '@material-ui/core';
import Title from '../components/title';
import MainImg from '../assets/images/tnk.jpeg';
import Button from '@material-ui/core/Button';
import Service from '../components/service'
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import my_resume from '../assets/images/Resume.pdf'

const useStyles = makeStyles((theme) => ({
	root: {
	 	  minHeight: '100vh',
    },
	aboutGrid: {
		paddingTop: 60,
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 20,
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
		paddingRight: 30,
		paddingLeft: 20,
		[theme.breakpoints.down('xs')]: {
			padding: 0,
			marginTop: 10,
		},
	},
	iconStyle: {
		fontSize: 46,
		color: theme.palette.primary.main,
	},
}));

export default function AboutScreen() {
	const translate = getTranslate();
	const classes = useStyles();
	return (
		<Grid
			// justify="flex-start"
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
							<Button variant="contained" color="primary" component='a'
							href={my_resume} target='_blank' >
								{translate.downloadcv}
							</Button>
						</div>
					</Grid>
				</Grid>
			</Grid>

			<Grid className={classes.aboutGrid} item container xs={12}>
				<Title title={translate.services} />
				<Grid container direction="row" className={classes.mainAbout}>
					<Service
						icon={<CodeIcon className={classes.iconStyle} />}
						title={translate.webdevelop}
						description={translate.descwebdev}
					/>
                    <Service
                        icon={<ColorLensIcon className={classes.iconStyle} />}
                        title={translate.webdesign}
						description={translate.descdesgin}
					/>
					<Service
						icon={<PhoneIcon className={classes.iconStyle} />}
						title={translate.mobileapp}
						description={translate.descmobApp}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
