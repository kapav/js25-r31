import React, {Component} from 'react'
import classes from './index.module.css'
import MenuToggle from '../../components/nav/menu-toggle'
import Drawer from '../../components/nav/drawer'

class Layout extends Component {
  state={
    menu: false
  }
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  render() {
    return (
      <div className={classes.layout}>
        <Drawer
          isOpen={this.state.menu}
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

export default Layout
