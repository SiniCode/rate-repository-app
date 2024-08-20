import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import { formStyles } from '../styles/formStyles';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

const initialValues = {
	username: '',
	password: '',
};

export const SignInForm = ({ onSubmit }) => {
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
			<Pressable onPress={formik.handleSubmit} style={formStyles.button}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					Sign in
				</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log(data);
			navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
