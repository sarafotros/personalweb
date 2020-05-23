import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Grid, Typography} from '@material-ui/core'
import './home.css'
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/MailOutline';
import MusicNotIcon from '@material-ui/icons/MusicNote';
import { getTranslate} from '../localization/index'
 

const useStyle = makeStyles((theme) => ({
	root: {
		height: '100vh',
		overflow: 'hidden',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
	},
	divIcons: {
		marginTop: 25,
	},
	iconButtonStyle: {
		border: '2px solid #2e344e',
		marginLeft: 8,
		marginRight: 8,
		textAlign: 'center',
		transition: '.5s',
		'&:hover': {
			borderColor: theme.palette.primary.main,
			color: theme.palette.primary.main,
			transition: '.5s',
		},
	},
}));

const translate = getTranslate()

export default function HomeScreen() {
    const classes = useStyle()

    return (
			<div className={classes.root}>
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
				<Grid>
					<Typography variant="h1">
						{translate.hi} 
						<span className={classes.nameText}> {translate.name} </span>
						{translate.hi2} 
					</Typography>
					<Typography variant="subtitle1">
						I am a junior Full stack web developer, with a background as a
						professional musician and tutor.
					</Typography>
					<div className={classes.divIcons}>
						<IconButton color="secondary" className={classes.iconButtonStyle}>
							<TelegramIcon />
						</IconButton>
						<IconButton color="secondary" className={classes.iconButtonStyle}>
							<LinkedInIcon />
						</IconButton>
						<IconButton color="secondary" className={classes.iconButtonStyle}>
							<GitHubIcon />
						</IconButton>
						<IconButton color="secondary" className={classes.iconButtonStyle}>
							<InstagramIcon />
						</IconButton>
						<IconButton color="secondary" className={classes.iconButtonStyle}>
							<YouTubeIcon />
						</IconButton>
					</div>
				</Grid>
			</div>
		);
}
