import React from 'react';
import '../index.scss';

const Result = ({questionQuantiti, correct}) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы парвильно ответили на {correct} из {questionQuantiti} вопросов</h2>
      <a href="/" className="btn-again">
        Попробовать снова
      </a>
    </div>
  );
};

export default Result;
