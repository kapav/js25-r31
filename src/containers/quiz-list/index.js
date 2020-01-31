import React, {Component} from 'react'
import classes from './index.module.css'
import {NavLink} from 'react-router-dom'
import Loader from '../../components/ui/loader'
import axios from 'axios'

export default class QuizList extends Component {
  state = {
    quizzes: [],
    loading: true
  }
  renderQuizzes() {
    return this.state.quizzes.map(quiz => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }
  async componentDidMount() {
    try {
      const response = await axios.get('https://react-quiz-7a9fa.firebaseio.com/quizzes.json')
      const quizzes = []
      Object.keys(response.data).forEach((key, index) => {
        quizzes.push({
          id: key,
          name: `Опрос №${index + 1}`
        })
      })
      this.setState({
        quizzes,
        loading: false
      })
    } catch(e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div className={classes.quizList}>
        <div>
          <h1>Список опросов</h1>
          {
            this.state.loading
              ? <Loader/>
              : <ul>
                  { this.renderQuizzes() }
                </ul>
          }
        </div>
      </div>
    )
  }
}
