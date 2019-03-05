/**
 * @flow
 * @relayHash 6bab0c773bd33321441feb2120d27bb2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SubjectList_viewer$ref = any;
export type SubjectListPageQueryVariables = {||};
export type SubjectListPageQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: SubjectList_viewer$ref
  |}
|};
export type SubjectListPageQuery = {|
  variables: SubjectListPageQueryVariables,
  response: SubjectListPageQueryResponse,
|};
*/


/*
query SubjectListPageQuery {
  viewer {
    ...SubjectList_viewer
    id
  }
}

fragment SubjectList_viewer on Viewer {
  allSubjects(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Subject_subject
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment Subject_subject on Subject {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC",
    "type": "SubjectOrderBy"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SubjectListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SubjectList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SubjectListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allSubjects",
            "storageKey": "allSubjects(last:100,orderBy:\"createdAt_DESC\")",
            "args": (v0/*: any*/),
            "concreteType": "SubjectConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SubjectEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Subject",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
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
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allSubjects",
            "args": (v0/*: any*/),
            "handle": "connection",
            "key": "SubjectList_allSubjects",
            "filters": []
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SubjectListPageQuery",
    "id": null,
    "text": "query SubjectListPageQuery {\n  viewer {\n    ...SubjectList_viewer\n    id\n  }\n}\n\nfragment SubjectList_viewer on Viewer {\n  allSubjects(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Subject_subject\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Subject_subject on Subject {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd9798dcb96a96d2a8a454ec1c80acff3';
module.exports = node;
