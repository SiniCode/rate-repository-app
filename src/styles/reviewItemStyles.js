import { StyleSheet } from 'react-native';
import theme from '../theme';

export const reviewItemStyles = StyleSheet.create({
	container: {
		padding: 20,
		maxWidth: 460,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 20,
		backgroundColor: 'white',
		marginTop: 10,
	},
	rating: {
		width: 50,
		height: 50,
		borderColor: theme.colors.primary,
		borderRadius: 25,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	info: {
		padding: 5,
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
		gap: 5,
	},
	viewButton: {
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
		padding: 10,
		alignItems: 'center',
		width: 125,
	},
	deleteButton: {
		borderRadius: 5,
		backgroundColor: theme.colors.error,
		padding: 10,
		alignItems: 'center',
		width: 125,
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1,
		gap: 20,
	},
});
