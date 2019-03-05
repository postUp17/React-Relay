import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";

class Subject extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.subject.name} ({this.props.subject.id})
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  Subject,
  graphql`
    fragment Subject_subject on Subject {
      id
      name
    }
  `
);
