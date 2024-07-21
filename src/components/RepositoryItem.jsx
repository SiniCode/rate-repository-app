import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		maxWidth: 460,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 25,
		backgroundColor: 'white',
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},
	numberComponent: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	},
	numbersSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
	languageChip: {
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
		width: 'fit-content',
		height: 'fit-content',
		padding: 6,
	},
	info: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		gap: 10,
	},
	description: {
		flex: 1,
		maxWidth: 260,
	},
});

const formatNumber = (num) => {
	if (num < 1000) {
		return `${num}`;
	}

	const rounded = (num / 1000).toFixed(1);

	if (rounded.endsWith('0')) {
		return `${rounded.split('.')[0]}k`;
	}

	return `${rounded}k`;
};

const NumberComponent = (props) => {
	return (
		<View style={styles.numberComponent}>
			<Text fontWeight='bold'>{formatNumber(props.num)}</Text>
			<Text color='textSecondary'>{props.title}</Text>
		</View>
	);
};

const InfoComponent = (props) => {
	return (
		<View style={styles.info}>
			<Text fontSize='subheading' fontWeight='bold'>
				{props.name}
			</Text>
			<View style={styles.description}>
				<Text color='textSecondary'>{props.description}</Text>
			</View>
			<View style={styles.languageChip}>
				<Text style={{ color: 'white' }}>{props.language}</Text>
			</View>
		</View>
	);
};

const RepositoryItem = ({ repositoryObject }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: repositoryObject.ownerAvatarUrl }}
				alt="Repository author's avatar image"
			/>
			<InfoComponent
				name={repositoryObject.fullName}
				description={repositoryObject.description}
				language={repositoryObject.language}
			/>
			<View style={styles.numbersSection}>
				<NumberComponent num={repositoryObject.forksCount} title='Forks' />
				<NumberComponent num={repositoryObject.stargazersCount} title='Stars' />
				<NumberComponent num={repositoryObject.reviewCount} title='Reviews' />
				<NumberComponent num={repositoryObject.ratingAverage} title='Rating' />
			</View>
		</View>
	);
};

export default RepositoryItem;
