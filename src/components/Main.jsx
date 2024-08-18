import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import CreateReview from './CreateReview';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.backgroundLight,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<Routes>
				<Route path='/' element={<RepositoryList />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/sign-out' element={<SignOut />} />
				<Route path='/repository/:id' element={<RepositoryDetails />} />
				<Route path='/create-review' element={<CreateReview />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</View>
	);
};

export default Main;
