import { Platform } from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#4682B4',
		backgroundDark: '#24292e',
		backgroundLight: '#e1e4e8',
		error: '#d73a4a',
	},
	fontSizes: {
		body: 14,
		subheading: 16,
	},
	fonts: {
		main: Platform.select({
			ios: 'Arial',
			android: 'Roboto',
			default: 'System',
		}),
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
};

export default theme;
