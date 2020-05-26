import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 20,
	},
	main: {
		backgroundColor: '#191d2b',
		border: '1px solid #2e344e',
		borderTop: '5px solid #2e344e',
		padding: theme.spacing(8),
		transition: '.4s',
		'&:hover': {
			borderTopColor: theme.palette.primary.main,
			transition: '.4s',
		},
	},
	iconStyle: {
		fontSize: 46,
		color: theme.palette.primary.main,
	},
	title: {
		marginTop: 15,
		position: 'relative',
		paddingBottom: 15,
		'&::before': {
			content: "''",
			position: 'absolute',
			left: 0,
			top: 'auto',
			bottom: 0,
			height: 3,
			width: 50,
			backgroundColor: '#2e344e',
		},
	},
    description: {
        marginTop: 15,
    }
}));

export default function Service({title, description, icon}) {
    const classes = useStyles()
    return (
			<Grid item lg={4} md={6} xs={12} className={classes.root}>
				<Grid
					className={classes.main}
					container
					direction="column"
					alignItems="flex-start"
				>
					{icon}
					<Typography className={classes.title} variant="h5">
						{title}
					</Typography>
                <Typography variant="body1" className={classes.description}>
                    {description}
					</Typography>
				</Grid>
			</Grid>
		);
}
 