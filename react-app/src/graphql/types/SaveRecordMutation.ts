/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveRecordMutation
// ====================================================

export interface SaveRecordMutation_saveRecord {
  __typename: "Record";
  id: any;
  text: string;
  date: any;
}

export interface SaveRecordMutation {
  saveRecord: SaveRecordMutation_saveRecord;
}

export interface SaveRecordMutationVariables {
  text: string;
}
