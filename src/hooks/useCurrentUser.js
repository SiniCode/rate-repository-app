import { useQuery } from '@apollo/client';

import { CURRENT_USER } from '../graphql/queries';

const useCurrentUser = () => {
	const { data, error, loading } = useQuery(CURRENT_USER);

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
