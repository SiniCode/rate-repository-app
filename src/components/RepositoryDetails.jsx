import { useParams } from 'react-router-native';
import Text from './Text';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const RepositoryDetails = () => {
	const id = useParams().id;

	const { repository } = useRepository({ id });

	if (!repository) {
		return <Text>Something went wrong</Text>;
	}

	return <RepositoryItem repositoryObject={repository} urlButton={true} />;
};

export default RepositoryDetails;
