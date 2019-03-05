import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import PostList from "./PostList";

const PostListPageQuery = graphql`
  query PostListPageQuery {
    viewer {
      ...PostList_viewer
    }
  }
`;

class PostListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={PostListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <PostList viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default PostListPage;
