import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import {getDirection, getFont} from '../localization/index';

const theme = createMuiTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: '3.2857rem',
            lineHeight: '4rem',
            fontFamily: getFont()
        }
    }
})
export default theme 