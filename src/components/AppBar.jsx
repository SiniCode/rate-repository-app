import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		padding: 10,
		height: 80,
		backgroundColor: theme.colors.appBarBackRound,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
	},
	item: {
		color: theme.colors.appBarText,
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
