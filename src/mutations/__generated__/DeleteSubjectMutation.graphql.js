/**
 * @flow
 * @relayHash 6389c6cce1f5a6cd7a602d8a2ca3cfe5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteSubjectInput = {|
  id: string,
  clientMutationId: string,
|};
export type DeleteSubjectMutationVariables = {|
  input: DeleteSubjectInput
|};
export type DeleteSubjectMutationResponse = {|
  +deleteSubject: ?{|
    +subject: ?{|
      +name: string,
      +id: string,
    |}
  |}
|};
export type DeleteSubjectMutation = {|
  variables: DeleteSubjectMutationVariables,
  response: DeleteSubjectMutationResponse,
|};
*/


/*
mutation DeleteSubjectMutation(
  $input: DeleteSubjectInput!
) {
  deleteSubject(input: $input) {
    subject {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteSubjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteSubject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteSubjectInput!"
      }
    ],
    "concreteType": "DeleteSubjectPayload",
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
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
    "name": "DeleteSubjectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteSubjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteSubjectMutation",
    "id": null,
    "text": "mutation DeleteSubjectMutation(\n  $input: DeleteSubjectInput!\n) {\n  deleteSubject(input: $input) {\n    subject {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '30283b0d54356107202f9ea98ac57837';
module.exports = node;
