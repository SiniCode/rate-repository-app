import { useNavigate } from 'react-router-native';
import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, navigate }) => {
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => (
				<Pressable onPress={() => navigate(`/repository/${item.id}`)}>
					<RepositoryItem repositoryObject={item} />
				</Pressable>
			)}
		/>
	);
};

const RepositoryList = () => {
	const { repositories } = useRepositories();
	const navigate = useNavigate();

	return (
		<RepositoryListContainer repositories={repositories} navigate={navigate} />
	);
};

export default RepositoryList;
