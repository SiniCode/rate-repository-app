import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		padding: 20,
		height: 80,
		backgroundColor: theme.colors.backgroundDark,
	},
	scrollView: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		gap: 20,
	},
	item: {
		color: 'white',
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView horizontal contentContainerStyle={styles.scrollView}>
				<AppBarTab text='Repositories' route='/' style={styles.item} />
				<AppBarTab text='Sign in' route='/sign-in' style={styles.item} />
			</ScrollView>
		</View>
	);
};

export default AppBar;