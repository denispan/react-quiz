import React from 'react';
import '../index.scss';

const Game = ({step, setStep, question, correct, setCorrect, questionQuantiti}) => {

  function shuffleArr(array) {
    const resArr = array.slice();
    for (let i = resArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [resArr[i], resArr[j]] = [resArr[j], resArr[i]];
    }
    return resArr;
  }

  const shuffledArr = shuffleArr(question.variants);

  const handleClickVariant = (variant) => {
    setStep(step + 1);
    if (variant === question.correct) setCorrect(correct + 1);
  }

  return (
    <>
      <div className="progress">
        <div style={{'width': `${step/questionQuantiti * 100}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          shuffledArr.map((variant) => (
              <li onClick={() => handleClickVariant(variant)} key={variant}>{variant}</li>
            ))
        }
      </ul>
    </>
  );
};

export default Game;
