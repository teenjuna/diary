/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecordQuery
// ====================================================

export interface GetRecordQuery_getRecord {
  __typename: "Record";
  id: any;
  text: string;
  date: any;
}

export interface GetRecordQuery {
  getRecord: GetRecordQuery_getRecord;
}

export interface GetRecordQueryVariables {
  id: any;
}
