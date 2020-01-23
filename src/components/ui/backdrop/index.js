import React from 'react'
import classes from './index.module.css'

const Backdrop = props => <div
  className={classes.backdrop}
  onClick={props.onClick}
/>

export default Backdrop
