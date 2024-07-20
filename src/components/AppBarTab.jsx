import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ text, style }) => {
	const handlePress = () => {
		console.log('App bar tab was pressed');
	};

	return (
		<Pressable onPress={handlePress}>
			<Text fontWeight='bold' fontSize='subheading' style={style}>
				{text}
			</Text>
		</Pressable>
	);
};

export default AppBarTab;
