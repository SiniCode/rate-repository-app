import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
	picker: {
		padding: 30,
		paddingLeft: 20,
		maxWidth: 460,
		color: theme.colors.textPrimary,
		fontFamily: theme.fonts.main,
		fontSize: theme.fontSizes.subheading,
		backgroundColor: theme.colors.backgroundLight,
		borderWidth: 0,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const OrderPicker = ({ order, setOrder }) => {
	return (
		<Picker
			selectedValue={order}
			onValueChange={(itemValue) => setOrder(itemValue)}
			style={styles.picker}
		>
			<Picker.Item label='Latest repositories' value='latest' />
			<Picker.Item label='Highest rated repositories' value='highest' />
			<Picker.Item label='Lowest rated repositories' value='lowest' />
		</Picker>
	);
};

export const RepositoryListContainer = ({
	repositories,
	navigate,
	order,
	setOrder,
}) => {
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ListHeaderComponent={<OrderPicker order={order} setOrder={setOrder} />}
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
	const [order, setOrder] = useState('latest');
	const { repositories } = useRepositories({
		orderBy: order === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE',
		orderDirection: order === 'lowest' ? 'ASC' : 'DESC',
	});
	const navigate = useNavigate();

	return (
		<RepositoryListContainer
			repositories={repositories}
			navigate={navigate}
			order={order}
			setOrder={setOrder}
		/>
	);
};

export default RepositoryList;
