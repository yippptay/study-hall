import React, { Component } from "react";
import "./style.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      displayAnswer: false,
      question: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.displayAnswer === true) {
      this.setState({
        displayAnswer: !this.state.displayAnswer,
      });
    }
    const query = "http://jservice.io/api/random";
    try {
      const request = await fetch(query);
      const response = await request.json();
      await this.setState({
        question: response,
      });
    } catch (error) {
      console.error(error);
    }
  }
  toggleAns = (event) => {
    if (this.state.question.length > 0) {
      this.setState({
        displayAnswer: !this.state.displayAnswer,
      });
    }
  };
  increaseScore = (event) => {
    this.setState({
      score: (this.state.score += this.state.question[0].value),
    });
  };
  decreaseScore = (event) => {
    this.setState({
      score: (this.state.score -= this.state.question[0].value),
    });
  };
  resetScore = (event) => {
    this.setState({
      score: (this.state.score = 0),
    });
  };
  render() {
    return (
      <div className="app">
        <h1>Welcome to Jeopardy!</h1>
        <div className="score">
          <h3 className="score-item">Score</h3>
          <span></span>
          <h3 className="score-item">{this.state.score}</h3>
        </div>
        <div className="btn-container">
          <button onClick={this.increaseScore} className="btn  green accent-4">
            Increase
          </button>
          <button onClick={this.decreaseScore} className="btn red darken-4">
            Decrease
          </button>
          <button onClick={this.resetScore} className="btn grey darken-2">
            Reset
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input className="btn red" type="submit" value="Get Question" />
        </form>
        {this.state.question.length > 0 ? (
          <div>
            <div className="answer">
              <h3>Category: {this.state.question[0].category.title}</h3>
              <h3>Points: {this.state.question[0].value}</h3>
              <p>Answer: {this.state.question[0].question}</p>
            </div>
          </div>
        ) : (
          <h2>Ready?</h2>
        )}

        <button onClick={this.toggleAns} className="btn blue darken-2 sizeOne">
          Click to Reveal Question
        </button>
        {this.state.displayAnswer ? (
          <h3>{this.state.question[0].answer}</h3>
        ) : (
          <h3></h3>
        )}
      </div>
    );
  }
}

export default App;
