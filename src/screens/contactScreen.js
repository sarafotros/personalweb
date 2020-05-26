
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTranslate } from '../localization/index';
import { Grid, Typography, TextField } from '@material-ui/core';
import Title from  '../components/title';
import './contact.css'
import ContactBox from '../components/contactBox';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/CallOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import RoomIcon from '@material-ui/icons/RoomOutlined';

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
			paddingRight: 5,
			paddingLeft: 5,
		},
	},
	formGrid: {
		padding: 12,
	},
	detailsGrid: {
		padding: 12,
	},
	getinTouch: {
		textAlign: 'left',
	},
    iconStyle: {
        fontSize: 30,
    }
}));

export default function ContactScreen() {
	const translate = getTranslate();
	const classes = useStyles();
	return (
		<Grid alignItems="flex-start" container className={classes.root}>
			<Grid className={classes.contactGrid} item container xs={12}>
				<Title title={translate.contactme} />
				<Grid container direction="row" className={classes.formGrid}>
					<Grid className={classes.formGrid} item xs={12} md={6}>
						<Typography className={classes.getinTouch} variant="h4">
							{' '}
							{translate.getinTouch}
						</Typography>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label={translate.enterYourName}
							// defaultValue={translate.namef}
							variant="outlined"
						/>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label={translate.enterYourEmail}
							// defaultValue={translate.emailf}
							variant="outlined"
						/>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label={translate.enterYourSubject}
							// defaultValue={translate.subjectf}
							variant="outlined"
						/>
						<TextField
							style={{ marginTop: 25 }}
							size="medium"
							fullWidth
							required
							id="outlined-required"
							label={translate.enterYourMessage}
							// defaultValue={translate.mesgF}
							variant="outlined"
							multiline={true}
							rows={6}
						/>
						<Button
							variant="contained"
							color="primary"
							size="large"
							style={{ marginTop: 25, display: 'flex' }}
						>
							{translate.sendMessage}
						</Button>
					</Grid>
					<Grid className={classes.detailsGrid} item xs={12} md={6}>
						<ContactBox
							title="Phone"
							text1="(+44) 7401763373"
							text2="(+98) 9133140149"
							icon={<CallIcon className={classes.iconStyle} />}
						/>
						<ContactBox
							title="Email"
							text1="sarafotros@gmail.com"
							// text2="twitter.com/sarafotros"
							icon={<EmailIcon className={classes.iconStyle} />}
						/>
						<ContactBox
							title="Address"
							text1="London United Kingdom"
							// text2="United Kingdom"
							icon={<RoomIcon className={classes.iconStyle} />}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
