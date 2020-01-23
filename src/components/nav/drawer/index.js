import React, {Component} from 'react'
import classes from './index.module.css'
import Backdrop from '../../ui/backdrop'

const links = [
  1, 2, 3
]

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="#">Ссылка {link}</a>
        </li>
      )
    })
  }
  render() {
    const cls = [classes.drawer]
    if (!this.props.isOpen) {
      cls.push(classes.close)
    }
    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>
        { this.props.isOpen
          ? <Backdrop onClick={this.props.onClose} />
          : null }
      </React.Fragment>
    )
  }
}

export default Drawer
