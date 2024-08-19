import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
	query getRepositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
	) {
		repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
			edges {
				node {
					...RepositoryInfo
				}
			}
		}
	}
	${REPOSITORY_INFO}
`;

export const GET_REPOSITORY = gql`
	query getRepository($repositoryId: ID!) {
		repository(id: $repositoryId) {
			...RepositoryInfo
			url
			reviews {
				edges {
					node {
						id
						text
						rating
						createdAt
						user {
							id
							username
						}
					}
				}
			}
		}
	}
	${REPOSITORY_INFO}
`;

export const CURRENT_USER = gql`
	query {
		me {
			id
			username
		}
	}
`;
