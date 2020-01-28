import React, {Component} from 'react'
import classes from './index.module.css'
import ActiveQuiz from '../../components/active-quiz'
import FinishedQuiz from '../../components/finished-quiz'

class Quiz extends Component {
  state = {
    results: {}, // { [id]: success failure }
    isFinished: false, // Предотвращает завершение при таймауте
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results
    if (question.correctAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'failure'
      this.setState({
        answerState: {[answerId]: 'failure'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  redoHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  componentDidMount() {
    console.log('Идентификатор опроса =', this.props.match.params.id)
  }

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Вопросник (ответьте на все вопросы)</h1>
          {
            this.state.isFinished
            ? <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRedo={this.redoHandler}
            />
            : <ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}

export default Quiz
