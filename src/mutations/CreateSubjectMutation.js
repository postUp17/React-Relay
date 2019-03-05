import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation CreateSubjectMutation($input: CreateSubjectInput!) {
    createSubject(input: $input) {
      subject {
        id
        name
        createdAt
      }
    }
  }
`;

export default (name, callback) => {
  const variables = {
    input: {
      name,
      clientMutationId: ""
    }
  };

  commitMutation(environment, {
    mutation,
    variables,

    onCompleted: () => {
      callback();
    },
    onError: err => console.error(err)
  });
};
