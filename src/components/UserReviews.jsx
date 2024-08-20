import { useNavigate } from 'react-router-native';
import { FlatList, Alert } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import useDeleteReview from '../hooks/useDeleteReview';
import ReviewItem from './ReviewItem';

const confirmDeletion = ({ deleteFn, id }) => {
	Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
		{
			text: 'Cancel',
			onPress: () => console.log('Deletion cancelled'),
		},
		{ text: 'Delete', onPress: () => deleteFn({ id }) },
	]);
};

const UserReviews = () => {
	const navigate = useNavigate();
	const [deleteReview] = useDeleteReview();
	const { user } = useCurrentUser({ includeReviews: true });

	const reviews = user ? user.reviews.edges.map((edge) => edge.node) : [];

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => (
				<ReviewItem
					review={item}
					byNameOf='repository'
					onView={() => navigate(`/repository/${item.repository.id}`)}
					onDelete={() =>
						confirmDeletion({ deleteFn: deleteReview, id: item.id })
					}
				/>
			)}
			keyExtractor={({ id }) => id}
		/>
	);
};

export default UserReviews;
