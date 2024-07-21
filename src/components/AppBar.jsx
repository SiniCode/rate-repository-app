import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		padding: 20,
		height: 80,
		backgroundColor: theme.colors.backgroundDark,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
	},
	item: {
		color: 'white',
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab text='Repositories' style={styles.item} />
		</View>
	);
};

export default AppBar;
