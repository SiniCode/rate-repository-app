import { useQuery } from '@apollo/client';

import { CURRENT_USER } from '../graphql/queries';

const useCurrentUser = ({ includeReviews }) => {
	const { data, error, loading } = useQuery(CURRENT_USER, {
		variables: { includeReviews },
	});

	if (error) {
		console.log(error.message);
	}

	if (loading) {
		console.log('loading');
		return {};
	}

	const user = data.me;

	return { user, loading };
};

export default useCurrentUser;
