import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid } from '@material-ui/core';
import Title from '../components/title'
 
const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
    aboutGrid: {
        paddingTop: 60,
        paddingRight: 30,
       paddingLeft: 30,
    }
}));


export default function AboutScreen() {
    const translate = getTranslate();
    const classes = useStyles(); 
    return (
			<Grid container className={classes.root}>
				<Grid className={classes.aboutGrid} item container xs={12}>
					<Title title={translate.aboutme} />
				</Grid>
			</Grid>
		);
}
 