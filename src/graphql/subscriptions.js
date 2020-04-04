/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($owner: String!) {
    onCreateDevice(owner: $owner) {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($owner: String!) {
    onUpdateDevice(owner: $owner) {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($owner: String!) {
    onDeleteDevice(owner: $owner) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
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
