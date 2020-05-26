
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid, Typography, TextField } from '@material-ui/core';
import Title from  '../components/title';
import  './contact.css'
import Button from '@material-ui/core/Button';
import Service from '../components/service';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
	contactGrid: {
		paddingTop: 60,
		paddingBottom: 60,
		paddingRight: 20,
		paddingLeft: 20,
		[theme.breakpoints.down('xs')]: {
			paddingRight:5,
			paddingLeft: 5,
		},
	},
	formGrid: {},
	detailsGrid: {},
	getinTouch: {
		textAlign: 'left',
	},
}));

export default function ContactScreen() {
	const translate = getTranslate();
	const classes = useStyles();
	return (
		<Grid alignItems="flex-start" container className={classes.root}>
			<Grid className={classes.contactGrid} item container xs={12}>
				<Title title={translate.contactme} />
				<Grid container direction="row" className={classes.formGrid}>
					<Grid className={classes.imageGrid} item xs={12} md={6}>
						<Typography className={classes.getinTouch} variant="h4">
							{' '}
							Get In Touch
						</Typography>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label="Enter Your Name"
							defaultValue="Name"
							variant="outlined"
						/>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label="Enter Your Email"
							defaultValue="Email"
							variant="outlined"
						/>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label="Enter Your Subject"
							defaultValue="Subject"
							variant="outlined"
						/>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label="Enter Your Message"
							defaultValue="Message"
                            variant="outlined"
                            multiline={true}
                            rows={6}
                        />
                        <Button variant='contained' color='primary' size='large' style={{marginTop:25, display:'flex'}}>Send Message</Button>
					</Grid>
					<Grid className={classes.detailsGrid} item xs={12} md={6}></Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
