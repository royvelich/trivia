import './trivia-app.css';
import React, { Component } from 'react';
import TriviaCard from '../trivia-card/trivia-card';
import { triviaData } from '../../resources/data/trivia-data';

class TriviaApp extends Component {
  render() {
    return (
      <div className="trivia-app">
        <img src="/images/quiz.png" className="quiz-img"></img>
        {triviaData.cards.map((card) => ({sort: Math.random(), value: card})).sort((a, b) => a.sort - b.sort).map((a, index) => <TriviaCard cardId={index + 1} data={a.value}/>)}
        {/* {triviaData.cards.map((card, index) => <TriviaCard cardId={index + 1} data={card}/>)} */}
        {/* <TriviaCard data={triviaData.cards[0]}></TriviaCard>
        <TriviaCard data={triviaData.cards[1]}></TriviaCard>
        <TriviaCard data={triviaData.cards[2]}></TriviaCard> */}
      </div>
    );
  }
}

export default TriviaApp;
