import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateSubjectMutation from "../mutations/CreateSubjectMutation";
class SubjectCreate extends Component {
  state = {
    name: ""
  };

  onSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    CreateSubjectMutation(name, () => this.props.history.push("/"));
  }

  render() {
    return (
      <div>
        <Link className="black-text" to="/">
          back
        </Link>
        <h3>Create a New Subject</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Subject Name:</label>
          <input
            onChange={event => this.setState({ name: event.target.value })}
            value={this.state.title}
          />
          <button className="btn waves-effect waves-light" type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default SubjectCreate;
