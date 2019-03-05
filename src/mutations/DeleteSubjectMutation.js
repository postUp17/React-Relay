import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

// const mutation = graphql`
//   mutation CreateSubjectMutation($input: CreateSubjectInput!) {
//     createSubject(input: $input) {
//       subject {
//         id
//         name
//         createdAt
//       }
//     }
//   }
// `;
const mutation = graphql`
  mutation DeleteSubjectMutation($input: DeleteSubjectInput!) {
    deleteSubject(input: $input) {
      subject {
        name
        id
      }
    }
  }
`;

export default (id, callback) => {
  const variables = {
    input: {
      id,
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
