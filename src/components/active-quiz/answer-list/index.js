import React from 'react'
import classes from './index.module.css'
import AnswerItem from './answer-item'

const AnswerList = props => (
  <ul className={classes.answerList}>
    { props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      )
    }) }
    <li></li>
  </ul>
)

export default AnswerList
