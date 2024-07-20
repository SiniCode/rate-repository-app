import { View, Text } from 'react-native';

const RepositoryItem = ({ repositoryObject }) => {
	return (
		<View>
			<Text>Full name: {repositoryObject.fullName}</Text>
			<Text>Description: {repositoryObject.description}</Text>
			<Text>Language: {repositoryObject.language}</Text>
			<Text>Forks: {repositoryObject.forksCount}</Text>
			<Text>Stars: {repositoryObject.stargazersCount}</Text>
			<Text>Reviews: {repositoryObject.reviewCount}</Text>
			<Text>Rating: {repositoryObject.ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;
