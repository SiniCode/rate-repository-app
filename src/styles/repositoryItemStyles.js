import { StyleSheet } from 'react-native';
import theme from '../theme';

export const repositoryItemStyles = StyleSheet.create({
	container: {
		padding: 20,
		maxWidth: 460,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 25,
		backgroundColor: 'white',
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},
	numberComponent: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	},
	numbersSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
	languageChip: {
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
		width: 'fit-content',
		height: 'fit-content',
		padding: 6,
	},
	info: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		gap: 10,
	},
	description: {
		width: 290,
	},
	urlButton: {
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
		padding: 10,
		width: '100%',
		alignItems: 'center',
	},
});
