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
	[theme.breakpoints.down('xs')]: {
		paddingRight: 5,
		paddingLeft: 5,
	},
    skillSecondTitle:{
        marginLeft: 10,
    }
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
					<Typography variant="h4" className={classes.skillSecondTitle}>
						{translate.workExperience}
					</Typography>
				</Grid>
				<Grid container style={{ marginTop: 15, marginBottom: 15 }}>
					<MyStepper steps={translate.workingSteps} />
				</Grid>
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
					className={classes.mainAbout}
				>
					<SchoolIcon style={{ fontSize: 34 }} />
					<Typography variant="h4" className={classes.skillSecondTitle}>
						{translate.educationalQualification}
					</Typography>
				</Grid>
				<Grid container style={{ marginTop: 15, marginBottom: 15 }}>
					<MyStepper steps={translate.educationalSteps} />
				</Grid>
			</Grid>
		</Grid>
	);
}


