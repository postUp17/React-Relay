import React, { Component } from "react";
import PostListPage from "./PostListPage";
import SubjectListPage from "./SubjectListPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SubjectCreate from "./SubjectCreate";
import SubjectDetail from "./SubjectDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SubjectListPage} />
          <Route exact path="/posts" component={PostListPage} />
          <Route exact path="/subjects/new" component={SubjectCreate} />
          <Route exact path="/subjects/:id" component={SubjectDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
