import { View, Image, Pressable } from 'react-native';
import { openURL } from 'expo-linking';
import Text from './Text';
import { repositoryItemStyles } from '../styles/repositoryItemStyles';
import { formatNumber } from '../utils/formatNumber';

const NumberComponent = (props) => {
	return (
		<View style={repositoryItemStyles.numberComponent}>
			<Text fontWeight='bold'>{formatNumber(props.num)}</Text>
			<Text color='textSecondary'>{props.title}</Text>
		</View>
	);
};

const InfoComponent = ({ name, description, language }) => {
	return (
		<View style={repositoryItemStyles.info}>
			<Text fontSize='subheading' fontWeight='bold'>
				{name}
			</Text>
			<View style={repositoryItemStyles.description}>
				<Text color='textSecondary'>{description}</Text>
			</View>
			<View style={repositoryItemStyles.languageChip}>
				<Text style={{ color: 'white' }}>{language}</Text>
			</View>
		</View>
	);
};

const RepositoryItem = ({ repositoryObject, urlButton }) => {
	return (
		<View testID='repositoryItem' style={repositoryItemStyles.container}>
			<Image
				style={repositoryItemStyles.image}
				source={{ uri: repositoryObject.ownerAvatarUrl }}
				alt="Repository author's avatar image"
			/>
			<InfoComponent
				name={repositoryObject.fullName}
				description={repositoryObject.description}
				language={repositoryObject.language}
			/>
			<View style={repositoryItemStyles.numbersSection}>
				<NumberComponent num={repositoryObject.forksCount} title='Forks' />
				<NumberComponent num={repositoryObject.stargazersCount} title='Stars' />
				<NumberComponent num={repositoryObject.reviewCount} title='Reviews' />
				<NumberComponent num={repositoryObject.ratingAverage} title='Rating' />
			</View>
			{urlButton && (
				<Pressable
					style={repositoryItemStyles.urlButton}
					onPress={() => openURL(repositoryObject.url)}
				>
					<Text fontWeight='bold' style={{ color: 'white' }}>
						Open in GitHub
					</Text>
				</Pressable>
			)}
		</View>
	);
};

export default RepositoryItem;
