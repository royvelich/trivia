import React, { Component } from 'react';
import TriviaCardAnswer from '../trivia-card-answer/trivia-card-answer';
import './trivia-card.css';

class TriviaCard extends Component {
  render() {
    return (
      <div className="trivia-card">
        <h2>{this.props.cardId}. {this.props.data.text}</h2>
        <img src={this.props.data.image} className="card-image"/>
        <div className="card-answers">
        {this.props.data.answers.map((answer) => ({sort: Math.random(), value: answer})).sort((a, b) => a.sort - b.sort).map((a, index) => <TriviaCardAnswer answerId={index + 1} data={a.value}/>)}
        {/* {this.props.data.answers.map((answer, index) => <TriviaCardAnswer answerId={index + 1} data={answer}/>)} */}
        </div>
      </div>
    );
  }
}

export default TriviaCard;
