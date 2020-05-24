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
			fontSize: getDirection() === 'rtl' ? 50 : 52,
			lineHeight: '4rem',
			color: '#FFF',
			fontFamily: getFont(),
		},
		h2: {
			fontWeight: 600,
			fontSize: getDirection() === 'rtl' ? 38 : 40,
			lineHeight: '3.2857rem',
			fontFamily: getFont(),
			color: '#FFF',
		},
		h3: {
			fontWeight: 500,
			fontSize: getDirection() === 'rtl' ? 30 : 32,
			lineHeight: '2.7rem',
			fontFamily: getFont(),
			textAlign: 'left',
			color: '#FFF',
		},
		h4: {
			fontWeight: 500,
			fontSize: getDirection() === 'rtl' ? 26 : 28,
			lineHeight: '2.43rem',
			fontFamily: getFont(),
		},
		h5: {
			fontWeight: 600,
			fontSize: getDirection() === 'rtl' ? 21 : 23,
			lineHeight: '2.14rem',
			fontFamily: getFont(),
			color: '#FFF',
		},

		h6: {
			fontWeight: 600,
			fontSize: getDirection() === 'rtl' ? 16 : 18,
			lineHeight: '1.857rem',
			fontFamily: getFont(),
		},
		subtitle1: {
			fontWeight: 400,
			fontSize: getDirection() === 'rtl' ? 18 : 20,
			lineHeight: '2rem',
			fontFamily: getFont(),
			marginTop: 15,
		},
		body1: {
			fontWeight: 400,
			fontSize: getDirection() === 'rtl' ? 16 : 18,
			lineHeight: '1.8rem',
			color: '#a4acc4',
			fontFamily: getFont(),
			textAlign: getDirection() === 'rtl' ? 'justify' : 'left',
		},
		body2: {
			fontSize: getDirection() === 'rtl' ? 13 : 15,
			fontWeight: 600,
			color: '#a4acc4',
			fontFamily: getFont(),
			letterSpacing: 1,
			textAlign: 'center',
		},
		button: {
			fontWeight: 400,
			fontSize: getDirection() === 'rtl' ? 12 : 14,
			color: '#FFF',
			fontFamily: getFont(),
			letterSpacing: 2,
		},
	},
});
export default theme 