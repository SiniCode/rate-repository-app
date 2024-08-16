import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useCurrentUser from '../hooks/useCurrentUser';

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
	const { user } = useCurrentUser();

	return (
		<View style={styles.container}>
			<ScrollView horizontal contentContainerStyle={styles.scrollView}>
				<AppBarTab text='Repositories' route='/' style={styles.item} />
				{!user && (
					<AppBarTab text='Sign in' route='/sign-in' style={styles.item} />
				)}
				{user && (
					<AppBarTab
						text='Create a review'
						route='/create-review'
						style={styles.item}
					/>
				)}
				{user && (
					<AppBarTab text='Sign out' route='/sign-out' style={styles.item} />
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
