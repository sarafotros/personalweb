import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import {getDirection, getFont} from '../localization/index';

const theme = createMuiTheme({
	palette: palette,
	direction: getDirection(),
	spacing: 2.5,
	typography: {
		h1: {
			fontWeight: 600,
			fontSize: '3.2rem',
			lineHeight: '4rem',
			color: '#FFF',
			fontFamily: getFont(),
		},
		h2: {
			fontWeight: 600,
			fontSize: '2.57rem',
			lineHeight: '3.2857rem',
			fontFamily: getFont(),
			color: '#FFF'
		},
		h3: {
			fontWeight: 500,
			fontSize: '2rem',
			lineHeight: '2.7rem',
			fontFamily: getFont(),
		},
		h4: {
			fontWeight: 500,
			fontSize: '1.71rem',
			lineHeight: '2.43rem',
			fontFamily: getFont(),
		},
		h5: {
			fontWeight: 600,
			fontSize: '1.43rem',
			lineHeight: '2.14rem',
			fontFamily: getFont(),
		},

		h6: {
			fontWeight: 600,
			fontSize: '1.14rem',
			lineHeight: '1.857rem',
			fontFamily: getFont(),
		},
		subtitle1: {
			fontWeight: 400,
			fontSize: '1.25rem',
			lineHeight: '2rem',
			fontFamily: getFont(),
			marginTop: 15,
		},
		body1: {
			fontWeight: 400,
			fontSize: 18,
			lineHeight: '1.8rem',
			color: '#a4acc4',
			fontFamily: getFont(),
		},
		body2: {
			fontSize: '.94rem',
			fontWeight: 600,
			color: '#a4acc4',
			fontFamily: getFont(),
			letterSpacing: 1,
			textAlign: 'center'
		},
		button: {
			fontWeight: 400,
			fontSize: '0.9rem',
			color: '#FFF',
			fontFamily: getFont(),
			letterSpacing: 2,
		},
	},
});
export default theme 