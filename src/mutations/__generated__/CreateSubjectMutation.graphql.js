/**
 * @flow
 * @relayHash 27b6f33d56268513c0d0892f90643461
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSubjectInput = {|
  name: string,
  postsIds?: ?$ReadOnlyArray<string>,
  posts?: ?$ReadOnlyArray<SubjectpostsPost>,
  clientMutationId: string,
|};
export type SubjectpostsPost = {|
  content: string,
  likes?: ?number,
|};
export type CreateSubjectMutationVariables = {|
  input: CreateSubjectInput
|};
export type CreateSubjectMutationResponse = {|
  +createSubject: ?{|
    +subject: ?{|
      +id: string,
      +name: string,
      +createdAt: any,
    |}
  |}
|};
export type CreateSubjectMutation = {|
  variables: CreateSubjectMutationVariables,
  response: CreateSubjectMutationResponse,
|};
*/


/*
mutation CreateSubjectMutation(
  $input: CreateSubjectInput!
) {
  createSubject(input: $input) {
    subject {
      id
      name
      createdAt
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSubjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createSubject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateSubjectInput!"
      }
    ],
    "concreteType": "CreateSubjectPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "subject",
        "storageKey": null,
        "args": null,
        "concreteType": "Subject",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateSubjectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSubjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateSubjectMutation",
    "id": null,
    "text": "mutation CreateSubjectMutation(\n  $input: CreateSubjectInput!\n) {\n  createSubject(input: $input) {\n    subject {\n      id\n      name\n      createdAt\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b3b1a02466f4d80a969071740ed38ce';
module.exports = node;
