import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepConnector  from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	stepConnector: {
		'& span': {
			borderLeft: '3px solid #2e344e',
		},
	},
	stepContent: {
		borderLeft: '3px solid #2e344e',
	},
}));





export default function MyStepper() {
	const classes = useStyles();
	const steps = [
		{
			id: -1,
			date: '',
			title: '',
			subtitle: '',
			content: '',
		},
		{
			id: 0,
			date: '2002 - 2019',
			title: 'Musician',
			subtitle: 'Ajam',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eaque autem nam nulla provident? Reiciendis alias id blanditiis eiu ee fugit. Illum ducimus voluptate corporis. saksj jdsjdks',
		},
		{
			id: 1,
			date: '2002 - 2019',
			title: 'Musician',
			subtitle: 'Ajam',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eaque autem nam nulla provident? Reiciendis alias id blanditiis eiu ee fugit. Illum ducimus voluptate corporis. saksj jdsjdks',
		},
		{
			id: -2,
			date: '',
			title: '',
			subtitle: '',
			content: '',
		},
	];


	return (
		<div className={classes.root}>
			<Stepper
				connector={<StepConnector className={classes.stepConnector} />}
				style={{ backgroundColor: 'transparent' }}
				orientation="vertical"
			>
				{steps.map((step) => (
					<Step active={true} key={step.id}>
						<StepLabel icon>{step.title}</StepLabel>
						<StepContent className={classes.stepContent}>
							<Typography>{step.content}</Typography>
							<div className={classes.actionsContainer}>
								<div></div>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</div>
	);
}
