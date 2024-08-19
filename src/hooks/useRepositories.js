import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: { orderBy, orderDirection },
	});

	if (error) {
		console.log(error.message);
	}

	if (loading) {
		console.log('loading');
		return [];
	}

	const repositories = data.repositories;

	return { repositories, loading };
};

export default useRepositories;
