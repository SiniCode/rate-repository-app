import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		maxWidth: 460,
		display: 'flex',
		gap: 10,
		backgroundColor: 'white',
	},
	input: {
		padding: 10,
		fontFamily: theme.fonts.main,
		fontSize: theme.fontSizes.body,
		color: theme.colors.textSecondary,
		borderRadius: 5,
		borderColor: theme.colors.backgroundDark,
		borderWidth: 1,
	},
	button: {
		padding: 10,
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		alignItems: 'center',
	},
});

const initialValues = {
	username: '',
	password: '',
};

const SignInForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues,
		onSubmit,
	});

	return (
		<View style={styles.container}>
			<TextInput
				placeholder='Username'
				value={formik.values.username}
				onChangeText={formik.handleChange('username')}
				style={styles.input}
			/>
			<TextInput
				secureTextEntry
				placeholder='Password'
				value={formik.values.password}
				onChangeText={formik.handleChange('password')}
				style={styles.input}
			/>
			<Pressable onPress={formik.handleSubmit} style={styles.button}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					Sign in
				</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
