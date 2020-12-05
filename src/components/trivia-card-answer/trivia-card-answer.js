import React, { Component } from 'react';
import './trivia-card-answer.css';

class TriviaCardAnswer extends Component {
  render() {
    return (
      <div className="trivia-card-answer">
        <h2>{this.props.data.text}</h2>
      </div>
    );
  }
}

export default TriviaCardAnswer;
