import React from "react";
import Notification from "./components/Notification";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import {connect} from "react-redux";
import anecdoteService from "./services/anecdotes";
import {anecdoteInitialization} from "./reducers/anecdoteReducer";

class App extends React.Component {
  componentWillMount = async () => {
    const anecdotes = await anecdoteService.getAll();
    this.props.anecdoteInitialization(anecdotes);
  };

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    );
  }
}

export default connect(null, {anecdoteInitialization})(App);
