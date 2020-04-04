/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
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
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
