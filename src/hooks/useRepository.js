import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ id }) => {
	const { data, error, loading } = useQuery(GET_REPOSITORY, {
		fetchPolicy: 'cache-and-network',
		variables: { repositoryId: id },
	});

	if (error) {
		console.log(error.message);
	}

	if (loading) {
		console.log('loading');
		return {};
	}

	const repository = data.repository;

	return { repository, loading };
};

export default useRepository;
