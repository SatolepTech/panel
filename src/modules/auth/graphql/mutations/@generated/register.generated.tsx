/* eslint-disable */
import * as Types from '../../../../../graphql/schema';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RegisterMutationVariables = Types.Exact<{
  user: Types.AuthRegisterUserInput;
  company: Types.AuthRegisterCompanyInput;
}>;


export type RegisterMutation = { register: { success: boolean } };


export const RegisterDocument = gql`
    mutation register($user: AuthRegisterUserInput!, $company: AuthRegisterCompanyInput!) {
  register(user: $user, company: $company) {
    success
  }
}
    `;