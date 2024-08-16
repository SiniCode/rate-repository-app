import { useParams } from 'react-router-native';
import { format } from 'date-fns';
import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		maxWidth: 460,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 20,
		backgroundColor: 'white',
		marginTop: 10,
	},
	rating: {
		width: 50,
		height: 50,
		borderColor: theme.colors.primary,
		borderRadius: 25,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	info: {
		padding: 5,
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
		gap: 5,
	},
});

const RepositoryInfo = ({ repository }) => {
	return <RepositoryItem repositoryObject={repository} urlButton={true} />;
};

const ReviewItem = ({ review }) => {
	return (
		<View style={styles.container}>
			<View style={styles.rating}>
				<Text fontWeight='bold'>{review.rating}</Text>
			</View>
			<View style={styles.info}>
				<Text fontSize='subheading' fontWeight='bold'>
					{review.user.username}
				</Text>
				<Text color='textSecondary'>
					{format(new Date(review.createdAt), 'dd/MM/yyyy')}
				</Text>
			</View>
			<Text>{review.text}</Text>
		</View>
	);
};

const RepositoryDetails = () => {
	const id = useParams().id;

	const { repository } = useRepository({ id });

	if (!repository) {
		return <Text>Something went wrong</Text>;
	}

	const reviews = repository
		? repository.reviews.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={({ id }) => id}
			ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
		/>
	);
};

export default RepositoryDetails;
