import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		padding: 15,
		display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
	},
	image: {
        width: '100%',
       
	},
	title: {
        textAlign: 'left',
        cursor: 'pointer',
		'& a': {
			textDecoration: 'none',
			color: '#FFF',
			transition: '.4s',
			'&:hover': {
				color: theme.palette.primary.main,
				transition: '.4s',
			},
		},
	},
}));



export default function Portfo({image, title, desc, href}) {
    const classes = useStyles()
    return (
			<Grid item lg={4} className={classes.root}>
				<img className={classes.image} src={image} alt={title} />
				<Typography variant="h5" className={classes.title}>
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{title}
					</a>
				</Typography>
				<Typography variant="body1">{desc}</Typography>
			</Grid>
		);
}
