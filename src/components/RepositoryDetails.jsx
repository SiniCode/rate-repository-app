import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import Text from './Text';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const RepositoryInfo = ({ repository }) => {
	return <RepositoryItem repositoryObject={repository} urlButton={true} />;
};

const RepositoryDetails = () => {
	const id = useParams().id;

	const { repository } = useRepository({ id });

	if (!repository) {
		return <Text>Fetching repository details...</Text>;
	}

	const reviews = repository
		? repository.reviews.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => <ReviewItem review={item} byNameOf='user' />}
			keyExtractor={({ id }) => id}
			ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
		/>
	);
};

export default RepositoryDetails;
