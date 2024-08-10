import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();
	const [authenticate, result] = useMutation(AUTHENTICATE);

	const signIn = async ({ username, password }) => {
		const { data } = await authenticate({
			variables: { credentials: { username, password } },
		});
		await authStorage.setAccessToken(data.authenticate.accessToken);
		apolloClient.resetStore();

		return { data };
	};

	return [signIn, result];
};

export default useSignIn;
