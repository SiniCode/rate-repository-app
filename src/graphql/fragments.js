import { gql } from '@apollo/client';

export const REPOSITORY_INFO = gql`
	fragment RepositoryInfo on Repository {
		id
		fullName
		description
		language
		forksCount
		stargazersCount
		reviewCount
		ratingAverage
		ownerAvatarUrl
	}
`;
