import React, {Component} from 'react'
import classes from './index.module.css'
import ActiveQuiz from '../../components/active-quiz'
import FinishedQuiz from '../../components/finished-quiz'
import Loader from '../../components/ui/loader'
import { connect } from 'react-redux'
import {fetchQuizById, quizAnswerClick, redoQuiz} from '../../store/actions/quiz'

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.redoQuiz()
  }

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Вопросник (ответьте на все вопросы)</h1>
          {
            this.props.loading || !this.props.quiz
            ? <Loader/>
            : this.props.isFinished
              ? <FinishedQuiz
                results={this.props.results}
                quiz={this.props.quiz}
                onRedo={this.props.redoQuiz}
              />
              : <ActiveQuiz
                question={this.props.quiz[this.props.activeQuestion].question}
                answers={this.props.quiz[this.props.activeQuestion].answers}
                onAnswerClick={this.props.quizAnswerClick}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.activeQuestion + 1}
                state={this.props.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results, // { [id]: success failure }
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    redoQuiz: () => dispatch(redoQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
