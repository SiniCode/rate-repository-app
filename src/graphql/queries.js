import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
	query {
		repositories {
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
			url
			...RepositoryInfo
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
