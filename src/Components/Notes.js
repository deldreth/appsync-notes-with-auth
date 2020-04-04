import React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_NOTES = gql`
  query GetNotes {
    listNotes {
      items {
        id
        name
        body
      }
    }
  }
`;

function Notes() {
  return (
    <Query query={GET_NOTES}>
      {({ loading, data, error }) => {
        if (loading) {
          return <p>Fetching Notes...</p>;
        }

        if (error) {
          return <p>Notes?!</p>;
        }

        return data.listNotes.items.map((note) => <div>{note.name}</div>);
      }}
    </Query>
  );
}

export default Notes;
