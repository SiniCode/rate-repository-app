import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import { formStyles } from '../styles/formStyles';
import useCreateReview from '../hooks/useCreateReview';

const validationSchema = yup.object().shape({
	owner: yup.string().required('Repository owner is required'),
	name: yup.string().required('Repository name is required'),
	rating: yup
		.number()
		.min(0, 'Rating cannot be negative')
		.max(100, 'Rating cannot be higher than 100')
		.required('Rating is required'),
	review: yup.string(),
});

const initialValues = {
	owner: '',
	name: '',
	rating: '',
	review: '',
};

export const ReviewForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<View style={formStyles.container}>
			<TextInput
				placeholder='Repository owner'
				value={formik.values.owner}
				onChangeText={formik.handleChange('owner')}
				style={[
					formStyles.input,
					{
						borderColor:
							formik.touched.owner && formik.errors.owner && theme.colors.error,
					},
				]}
			/>
			{formik.touched.owner && formik.errors.owner && (
				<Text style={{ color: theme.colors.error }}>{formik.errors.owner}</Text>
			)}
			<TextInput
				placeholder='Repository name'
				value={formik.values.name}
				onChangeText={formik.handleChange('name')}
				style={[
					formStyles.input,
					{
						borderColor:
							formik.touched.name && formik.errors.name && theme.colors.error,
					},
				]}
			/>
			{formik.touched.name && formik.errors.name && (
				<Text style={{ color: theme.colors.error }}>{formik.errors.name}</Text>
			)}
			<TextInput
				placeholder='Rating between 0 and 100'
				value={formik.values.rating}
				onChangeText={formik.handleChange('rating')}
				style={[
					formStyles.input,
					{
						borderColor:
							formik.touched.rating &&
							formik.errors.rating &&
							theme.colors.error,
					},
				]}
			/>
			{formik.touched.rating && formik.errors.rating && (
				<Text style={{ color: theme.colors.error }}>
					{formik.errors.rating}
				</Text>
			)}
			<TextInput
				multiline
				placeholder='Review'
				value={formik.values.review}
				onChangeText={formik.handleChange('review')}
				style={[
					formStyles.input,
					{
						borderColor:
							formik.touched.review &&
							formik.errors.review &&
							theme.colors.error,
					},
				]}
			/>
			{formik.touched.review && formik.errors.review && (
				<Text style={{ color: theme.colors.error }}>
					{formik.errors.review}
				</Text>
			)}
			<Pressable onPress={formik.handleSubmit} style={formStyles.button}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					Create review
				</Text>
			</Pressable>
		</View>
	);
};

const CreateReview = () => {
	const [createReview] = useCreateReview();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { owner, name, rating, review } = values;

		try {
			const { data } = await createReview({
				ownerName: owner,
				repositoryName: name,
				rating: Number(rating),
				text: review,
			});
			console.log(data);
			navigate(`/repository/${data.createReview.repositoryId}`);
		} catch (e) {
			console.log(e);
		}
	};

	return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
