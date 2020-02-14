import React, {Component} from 'react'
import classes from './index.module.css'
import MenuToggle from '../../components/nav/menu-toggle'
import Drawer from '../../components/nav/drawer'
import { connect } from 'react-redux'

class Layout extends Component {
  state = {
    menu: false
  }
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }
  render() {
    return (
      <div className={classes.layout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Layout)
