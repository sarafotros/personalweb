import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, LinearProgress } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
	},
	progressDiv: {
		display: 'flex',
		justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
	},
    progress: {
        width: '90%',
        marginLeft: 15,
        height: 6,
        borderRadius: 2,
        backgroundColor: '#2e344e'
    }
}));
export default function Skill({value , title}) {
  
    const [val, setVal] = useState(0)
    const classes = useStyles();
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (val === value) {
    //             return
    //         }
    //         setVal(val => val+ 5)
    //     },100)
    // }, [val])
    
    useEffect(() => {
			setTimeout(() => {
			setVal(value)
			}, 1000);
		}, []);


    return (
			<div className={classes.root}>
				<Typography variant="h6">{title}</Typography>
				<div className={classes.progressDiv}>
                <Typography variant="body1">{value}%</Typography>
					<LinearProgress
						className={classes.progress}
						variant="determinate"
						value={val}
					></LinearProgress>
				</div>
			</div>
		);
}
