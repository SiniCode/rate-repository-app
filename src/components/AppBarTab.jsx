import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ text, route, style }) => {
	return (
		<Link to={route}>
			<Text fontWeight='bold' fontSize='subheading' style={style}>
				{text}
			</Text>
		</Link>
	);
};

export default AppBarTab;
