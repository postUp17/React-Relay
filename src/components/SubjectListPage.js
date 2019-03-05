import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import SubjectList from "./SubjectList";

const SubjectListPageQuery = graphql`
  query SubjectListPageQuery {
    viewer {
      ...SubjectList_viewer
    }
  }
`;

class SubjectListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={SubjectListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <SubjectList viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default SubjectListPage;
