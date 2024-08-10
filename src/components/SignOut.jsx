import { View, StyleSheet } from 'react-native';
import Text from './Text';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
});

const SignOut = () => {
	const { signOut } = useSignOut();
	signOut();

	return (
		<View style={styles.container}>
			<Text fontSize='subheading' fontWeight='bold'>
				Signed out successfully!
			</Text>
		</View>
	);
};

export default SignOut;
