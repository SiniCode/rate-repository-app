import { format } from 'date-fns';
import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

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
	viewButton: {
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
		padding: 10,
		alignItems: 'center',
		width: 125,
	},
	deleteButton: {
		borderRadius: 5,
		backgroundColor: theme.colors.error,
		padding: 10,
		alignItems: 'center',
		width: 125,
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1,
		gap: 20,
	},
});

const ReviewActions = ({ onView, onDelete }) => {
	return (
		<View style={styles.actions}>
			<Pressable onPress={onView} style={styles.viewButton}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					View repository
				</Text>
			</Pressable>
			<Pressable onPress={onDelete} style={styles.deleteButton}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					Delete review
				</Text>
			</Pressable>
		</View>
	);
};

const ReviewItem = ({ review, byNameOf, onView, onDelete }) => {
	return (
		<View style={styles.container}>
			<View style={styles.rating}>
				<Text fontWeight='bold'>{review.rating}</Text>
			</View>
			<View style={styles.info}>
				<Text fontSize='subheading' fontWeight='bold'>
					{byNameOf === 'user'
						? review.user.username
						: review.repository.fullName}
				</Text>
				<Text color='textSecondary'>
					{format(new Date(review.createdAt), 'dd/MM/yyyy')}
				</Text>
			</View>
			<View style={{ width: '100%' }}>
				<Text>{review.text}</Text>
			</View>
			{onView && onDelete && (
				<ReviewActions onView={onView} onDelete={onDelete} />
			)}
		</View>
	);
};

export default ReviewItem;
