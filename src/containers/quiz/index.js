import React, {Component} from 'react'
import classes from './index.module.css'
import ActiveQuiz from '../../components/active-quiz'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'failure' }
    quiz: [
      {
        question: 'Яблоко стоит 1.05, апельсин стоит 2.30. Сколько стоят они вместе – чему равна сумма 1.05 + 2.30 с точки зрения JavaScript?',
        correctAnswerId: 4,
        id: 1,
        answers: [
          {text: '335', id: 1},
          {text: '3.35', id: 2},
          {text: '3,35', id: 3},
          {text: 'Ни один из вариантов выше.', id: 4}
        ]
      },
      {
        question: 'Переменные pear и Pear (с большой буквы) – это одна и та же или разные?',
        correctAnswerId: 2,
        id: 2,
        answers: [
          {text: 'Одна и та же.', id: 1},
          {text: 'Разные.', id: 2},
          {text: 'С большой буквы переменные называть нельзя.', id: 3},
          {text: 'Слово «pear» является зарезервированным, нельзя использовать.', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]
    if (question.correctAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Опрос завершён.')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: {[answerId]: 'failure'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Вопросник (ответьте на все вопросы)</h1>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
