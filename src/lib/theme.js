import { green, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import fontRegular from '../assets/fonts/fontawesome-webfont.ttf';

const fontSans = {
	fontFamily: 'Source Sans Pro, sans-serif',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontStretch: 'normal',
	src: `url(${fontRegular}) format('truetype')`,
};
const fontSansBold = {
	fontFamily: 'Source Sans Pro, sans-serif',
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontStretch: 'normal',
	src: `url(${fontRegular}) format('truetype')`,
};

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#365bb4', //4f5dba
		},
		secondary: {
			main: '#808080', //'#808080',
		},
		default: {
			main: '#f4f6f8',
		},
		success: {
			main: green[600],
		},
		error: {
			main: red.A400,
		},
		danger: {
			main: '#fee6ea',
		},
		warning: {
			main: '#fef6e7',
		},
		info: {
			main: '#edf8f6',
		},
		drawer: {
			default: '#f4f6f8',
		},
		content: {
			main: '#f4f6f8',
		},
		header: {
			main: '#fcfcfe',
		},
	},
	typography: {
		fontFamily: ['Source Sans Pro, sans-serif'],
		button: {
			fontFamily: 'Source Sans Pro, sans-serif',
			fontSize: 14,
			fontStyle: 'Regular',
			textTransform: 'capitalize',
			borderRadius: '15px',
			// backgroundColor:'red'
		},
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [fontSans, fontSansBold],
			},
		},
	},
});

export default theme;
