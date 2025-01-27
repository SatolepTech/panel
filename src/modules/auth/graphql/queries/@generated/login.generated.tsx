/* eslint-disable */
import * as Types from '../../../../../graphql/schema';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LoginQueryVariables = Types.Exact<{
  identification: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type LoginQuery = { login: { token: string } };


export const LoginDocument = gql`
    query login($identification: String!, $password: String!) {
  login(identification: $identification, password: $password) {
    token
  }
}
    `;