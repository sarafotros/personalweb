import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Modal } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		padding: 15,
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 15,
	},
	image: {
		width: '100%',
		cursor: 'pointer',
		// '&:hover': {
		// 	transform: 'rotate(360deg)',
		// 	transition: '1s',
		// },
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
	modalImage: {
		width: '100%',
		height: '100%',
	},
	modal: {
		width: '60%',
		height: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 80,
		[theme.breakpoints.down('xs')]: {
			width: '90%',
			height: '50%',
		},
	},
}));



export default function Portfo({image, title, desc, href}) {
    const classes = useStyles()
    const [open, setOpen]= useState(false)
    return (
        <>
			<Grid item lg={4} className={classes.root}>
				<img onClick={()=> setOpen(true)} className={classes.image} src={image} alt={title} />
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
            <Modal className={classes.modal} open={open} onClose={()=> setOpen(false)}>
				<img className={classes.modalImage} src={image} alt={title} />
       		 </Modal>
        </>
		);
}
