import React from 'react'
import classes from './index.module.css'
import Button from '../ui/button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)
  return (
    <div className={classes.finishedQuiz}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'failure' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
          ]
          return (
            <li
              key={index}
            >
              <strong>{index + 1}.</strong>&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        }) }
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <Button onClick={props.onRedo} type="primary">Повторить</Button>
        <Link to="/">
          <Button type="success">Перейти к списку тестов</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz
