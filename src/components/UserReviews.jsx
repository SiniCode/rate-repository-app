import { FlatList } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import { ReviewItem } from './RepositoryDetails';

const UserReviews = () => {
	const { user } = useCurrentUser({ includeReviews: true });

	const reviews = user ? user.reviews.edges.map((edge) => edge.node) : [];

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => (
				<ReviewItem review={item} byNameOf='repository' />
			)}
			keyExtractor={({ id }) => id}
		/>
	);
};

export default UserReviews;
