import React, { Component } from "react";
import Subject from "./Subject";
import { createFragmentContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";
import DeleteSubjectMutation from "../mutations/DeleteSubjectMutation";

class SubjectList extends Component {
  onSubjectDelete(id) {
    DeleteSubjectMutation(id, () => window.location.reload());
  }
  renderSubject() {
    return this.props.viewer.allSubjects.edges.map(({ node }) => {
      return (
        <li key={node.__id} className="collection-item ">
          <Link className="black-text" to={`subjects/${node.__id}`}>
            <Subject key={node.__id} subject={node} />
          </Link>

          <i
            className="material-icons"
            onClick={() => this.onSubjectDelete(node.__id)}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="collection">{this.renderSubject()}</ul>
        <Link to="subjects/new" className="btn-floating btn-large green right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default createFragmentContainer(
  SubjectList,
  graphql`
    fragment SubjectList_viewer on Viewer {
      allSubjects(last: 100, orderBy: createdAt_DESC)
        @connection(key: "SubjectList_allSubjects", filters: []) {
        edges {
          node {
            ...Subject_subject
          }
        }
      }
    }
  `
);
