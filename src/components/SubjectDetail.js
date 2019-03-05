import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import PostList from "./PostList";
import { Link } from "react-router-dom";
import PostCreate from "./PostCreate";
import Post from "./Post";

class SubjectDetail extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{this.props.viewer.allPosts.edges.node.postedUnder.name}</h3>
        <PostList />
        <PostCreate subejectId={this.props.params.id} />
      </div>
    );
  }
}

export default createFragmentContainer(
  SubjectDetail,
  graphql`
    fragment SubjectDetail_viewer on Viewer {
      allPosts(last: 100, orderBy: createdAt_DESC)
        @connection(key: "SubjectDetail_allPosts", filters: []) {
        edges {
          node {
            ...Post_post
          }
        }
      }
    }
  `
);
