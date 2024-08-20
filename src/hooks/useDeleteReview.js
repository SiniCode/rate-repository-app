import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { CURRENT_USER } from '../graphql/queries';

const useDeleteReview = () => {
	const [mutate, result] = useMutation(DELETE_REVIEW, {
		refetchQueries: [
			{ query: CURRENT_USER, variables: { includeReviews: true } },
		],
	});

	const deleteReview = async ({ id }) => {
		const { data } = await mutate({
			variables: { deleteReviewId: id },
		});

		return { data };
	};

	return [deleteReview, result];
};

export default useDeleteReview;
