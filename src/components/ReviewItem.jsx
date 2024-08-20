import { format } from 'date-fns';
import { Pressable, View } from 'react-native';
import Text from './Text';
import { reviewItemStyles } from '../styles/reviewItemStyles';

const ReviewActions = ({ onView, onDelete }) => {
	return (
		<View style={reviewItemStyles.actions}>
			<Pressable onPress={onView} style={reviewItemStyles.viewButton}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					View repository
				</Text>
			</Pressable>
			<Pressable onPress={onDelete} style={reviewItemStyles.deleteButton}>
				<Text fontWeight='bold' style={{ color: 'white' }}>
					Delete review
				</Text>
			</Pressable>
		</View>
	);
};

const ReviewItem = ({ review, byNameOf, onView, onDelete }) => {
	return (
		<View style={reviewItemStyles.container}>
			<View style={reviewItemStyles.rating}>
				<Text fontWeight='bold'>{review.rating}</Text>
			</View>
			<View style={reviewItemStyles.info}>
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
