import React, {Component} from 'react'
import classes from './index.module.css'
import ActiveQuiz from '../../components/active-quiz'
import FinishedQuiz from '../../components/finished-quiz'
import axios from '../../axios/quiz'
import Loader from '../../components/ui/loader'

class Quiz extends Component {
  state = {
    results: {}, // { [id]: success failure }
    isFinished: false, // Предотвращает завершение при таймауте
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'failure' }
    quiz: [],
    loading: true
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

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizzes/${this.props.match.params.id}.json`)
      const quiz = response.data
      this.setState({
        quiz,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Вопросник (ответьте на все вопросы)</h1>
          {
            this.state.loading
            ? <Loader/>
            : this.state.isFinished
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
