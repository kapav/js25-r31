import React from 'react'
import classes from './index.module.css'

const FinishedQuiz = props => {
  return (
    <div className={classes.finishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          Текст вопроса 1
          <i className={'fa fa-times ' + classes.failure} />
        </li>
        <li>
          <strong>2. </strong>
          Текст вопроса 2
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>
      <p>Правильно 4 из 10</p>
      <div>
        <button>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
