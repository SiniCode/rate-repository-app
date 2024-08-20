import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { CURRENT_USER } from '../graphql/queries';

const useCreateReview = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW, {
		refetchQueries: [
			{ query: CURRENT_USER, variables: { includeReviews: true } },
		],
	});

	const createReview = async ({ ownerName, repositoryName, rating, text }) => {
		const { data } = await mutate({
			variables: { review: { ownerName, repositoryName, rating, text } },
		});

		return { data };
	};

	return [createReview, result];
};

export default useCreateReview;
