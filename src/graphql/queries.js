/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      notes {
        items {
          id
          name
          body
          createdAt
          updatedAt
          deviceID
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        notes {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      body
      createdAt
      updatedAt
      deviceID
      device {
        id
        notes {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        body
        createdAt
        updatedAt
        deviceID
        device {
          id
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
