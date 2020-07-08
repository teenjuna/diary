import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  RecordID: any;
};


export type Record = {
  __typename?: 'Record';
  id: Scalars['RecordID'];
  text: Scalars['String'];
  date: Scalars['Time'];
};

export type Query = {
  __typename?: 'Query';
  getRecord: Record;
  getRecords: Array<Record>;
};


export type QueryGetRecordArgs = {
  id: Scalars['RecordID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveRecord: Record;
  deleteRecord?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveRecordArgs = {
  text: Scalars['String'];
};


export type MutationDeleteRecordArgs = {
  id: Scalars['RecordID'];
};


export type DeleteRecordMutationVariables = Exact<{
  id: Scalars['RecordID'];
}>;


export type DeleteRecordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteRecord'>
);

export type GetRecordQueryVariables = Exact<{
  id: Scalars['RecordID'];
}>;


export type GetRecordQuery = (
  { __typename?: 'Query' }
  & { getRecord: (
    { __typename?: 'Record' }
    & RecordFragment
  ) }
);

export type GetRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecordsQuery = (
  { __typename?: 'Query' }
  & { getRecords: Array<(
    { __typename?: 'Record' }
    & RecordFragment
  )> }
);

export type RecordFragment = (
  { __typename?: 'Record' }
  & Pick<Record, 'id' | 'text' | 'date'>
);

export type SaveRecordMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type SaveRecordMutation = (
  { __typename?: 'Mutation' }
  & { saveRecord: (
    { __typename?: 'Record' }
    & RecordFragment
  ) }
);

export const RecordFragmentDoc = gql`
    fragment Record on Record {
  id
  text
  date
}
    `;
export const DeleteRecordDocument = gql`
    mutation DeleteRecord($id: RecordID!) {
  deleteRecord(id: $id)
}
    `;

export function useDeleteRecordMutation() {
  return Urql.useMutation<DeleteRecordMutation, DeleteRecordMutationVariables>(DeleteRecordDocument);
};
export const GetRecordDocument = gql`
    query GetRecord($id: RecordID!) {
  getRecord(id: $id) {
    ...Record
  }
}
    ${RecordFragmentDoc}`;

export function useGetRecordQuery(options: Omit<Urql.UseQueryArgs<GetRecordQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRecordQuery>({ query: GetRecordDocument, ...options });
};
export const GetRecordsDocument = gql`
    query GetRecords {
  getRecords {
    ...Record
  }
}
    ${RecordFragmentDoc}`;

export function useGetRecordsQuery(options: Omit<Urql.UseQueryArgs<GetRecordsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRecordsQuery>({ query: GetRecordsDocument, ...options });
};
export const SaveRecordDocument = gql`
    mutation SaveRecord($text: String!) {
  saveRecord(text: $text) {
    ...Record
  }
}
    ${RecordFragmentDoc}`;

export function useSaveRecordMutation() {
  return Urql.useMutation<SaveRecordMutation, SaveRecordMutationVariables>(SaveRecordDocument);
};