import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid } from '@material-ui/core';
import Title from '../components/title';
import Skill from '../components/skill'



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
				<Title title="MY SKILLS" />
				<Grid container direction="row" className={classes.mainAbout}>
					<Grid  item xs={12} md={6}>
						<Skill />
						<Skill />
						<Skill />
					</Grid>
					<Grid item xs={12} md={6}>
						<Skill />
						<Skill />
						<Skill />
					</Grid>
				</Grid>
			</Grid>

			<Grid className={classes.aboutGrid} item container xs={12}>
				<Title title='RESUME' />
				<Grid container direction="row" className={classes.mainAbout}>
					
				</Grid>
			</Grid>
		</Grid>
	);
}


