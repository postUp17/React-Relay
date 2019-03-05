import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";

class Post extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.post.content} ({this.props.post.likes})
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  Post,
  graphql`
    fragment Post_post on Post {
      id
      content
      likes
      postedUnder {
        name
      }
    }
  `
);
