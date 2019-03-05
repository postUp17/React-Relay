import React, { Component } from "react";
import Post from "./Post";
import { createFragmentContainer, graphql } from "react-relay";

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.viewer.allPosts.edges.map(({ node }) => (
          <Post key={node.__id} post={node} />
        ))}
      </div>
    );
  }
}

export default createFragmentContainer(
  PostList,
  graphql`
    fragment PostList_viewer on Viewer {
      allPosts(last: 100, orderBy: createdAt_DESC)
        @connection(key: "PostList_allPosts", filters: []) {
        edges {
          node {
            ...Post_post
          }
        }
      }
    }
  `
);
