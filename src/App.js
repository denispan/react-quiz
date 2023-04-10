import './index.scss';
import React, {useState} from 'react';
import Game from './components/Game';
import Result from './components/Result';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 'библиотека',
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 'часть приложения или страницы',
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 'Это тот же HTML, но с возможностью выполнять JS-код',
  },
  {
    title: 'Что такое useState?',
    variants: [
      'Это функция для хранения данных компонента',
      'Это глобальный стейт',
      'Это когда на ты никому не нужен',
    ],
    correct: 'Это функция для хранения данных компонента',
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  return (
    <div className="App">
      {step !== questions.length ?
        <Game
          step={step}
          setStep={setStep}
          question={question}
          correct={correct}
          setCorrect={setCorrect}
          questionQuantiti={questions.length}
        /> :
        <Result
          correct={correct}
          questionQuantiti={questions.length}
        />
      }
    </div>
  );
}

export default App;
