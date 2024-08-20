import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import { formStyles } from '../styles/formStyles';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(5, 'Minimum length is 5 characters')
		.max(30, 'Maximum length is 30 characters')
		.required('Username is required'),
	password: yup
		.string()
		.min(5, 'Minimum length is 5 characters')
		.max(50, 'Maximum length is 50 characters')
		.required('Password is required'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Password confirmation is required'),
});

const initialValues = {
	username: '',
	password: '',
	passwordConfirmation: '',
};

export const SignUpForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<View style={formStyles.container}>
			<TextInput
				placeholder='Username'
				value={formik.values.username}
				onChangeText={formik.handleChange('username')}
				style={[
					formStyles.input,
					{
						borderColor:
							formik.touched.username &&
							formik.errors.username &&
							theme.colors.error,
					},
				]}
			/>
			{formik.touched.username && formik.errors.username && (
				<Text style={{ color: theme.colors.error }}>
					{formik.errors.username}
				</Text>
			)}
			<TextInput
				secureTextEntry
				placeholder='Password'
				value={formik.values.password}
				onChangeText={formik.handleChange('password')}
				style={[
					formStyles.input,
					{
						borderColor:
							formik.touched.password &&
							formik.errors.password &&
							theme.colors.error,
					},
				]}
			/>
			{formik.touched.password && formik.errors.password && (
				<Text style={{ color: theme.colors.error }}>
					{formik.errors.password}
				</Text>
			)}
			<TextInput
				secureTextEntry
				placeholder='Password confirmation'
				value={formik.values.passwordConfirmation}
				onChangeText={formik.handleChange('passwordConfirmation')}
				style={[
					formStyles.input,
					{
						borderColor:
							formik.touched.passwordConfirmation &&
							formik.errors.passwordConfirmation &&
							theme.colors.error,
					},
				]}
			/>
			{formik.touched.passwordConfirmation &&
				formik.errors.passwordConfirmation && (
					<Text style={{ color: theme.colors.error }}>
						{formik.errors.passwordConfirmation}
					</Text>
				)}
			<Pressable onPress={formik.handleSubmit} style={formStyles.button}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					Sign up
				</Text>
			</Pressable>
		</View>
	);
};

const SignUp = () => {
	const [signUp] = useSignUp();
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signUp({ username, password });
			if (data.createUser.username) {
				await signIn({ username, password });
			}
			navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
