import React, {Component} from 'react'
import classes from './index.module.css'

class Quiz extends Component {
  state = {
    quiz: []
  }

  render() {
    return (
      <div className={classes.quiz}>
        <h1>Вопросник</h1>
      </div>
    )
  }
}

export default Quiz
