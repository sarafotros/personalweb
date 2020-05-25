import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid, Typography } from '@material-ui/core';
import Title from '../components/title';
import Skill from '../components/skill';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import MyStepper from '../components/myStepper'


const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
	skillGrid: {
		paddingTop: 60,
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 20,
	},

}));

export default function ResumeScreen() {
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
				<Title title={translate.myskills} />
				<Grid container direction="row" className={classes.mainAbout}>
					<Grid item xs={12} md={6}>
						<Skill value={80} title="HTML5" />
						<Skill value={75} title="JavaScript" />
						<Skill value={60} title="React JS" />
					</Grid>
					<Grid item xs={12} md={6}>
						<Skill value={70} title="Ruby" />
						<Skill value={60} title="Ruby on Rails" />
						<Skill value={80} title="CSS" />
					</Grid>
				</Grid>
			</Grid>

			<Grid className={classes.aboutGrid} item container xs={12}>
				<Title title={translate.resume} />
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
					className={classes.mainAbout}
				>
					<BusinessCenterIcon style={{ fontSize: 34 }} />
					<Typography style={{ marginLeft: 10 }}>Work Experience</Typography>
				</Grid>
				<Grid container style={{ marginTop: 15, marginBottom: 15 }}>
					<MyStepper />
				</Grid>
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
					className={classes.mainAbout}
				>
					<SchoolIcon style={{ fontSize: 34 }} />
					<Typography style={{ marginLeft: 10 }}>Educational Qualification</Typography>
				</Grid>
				<Grid container style={{ marginTop: 15, marginBottom: 15 }}>
					<MyStepper />
				</Grid>
			</Grid>
		</Grid>
	);
}


