import React, {Component} from 'react'
import Layout from '../hoc/layout'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Quiz from '../containers/quiz'
import QuizList from '../containers/quiz-list'
import Auth from '../containers/auth'
import QuizCreator from '../containers/quiz-creator'
import { connect } from 'react-redux'
import Logout from '../components/logout'
import { autoLogin } from '../store/actions/auth'

class HomePage extends Component {
  componentDidMount() {
    //this.props.autoLogin()
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
       </Switch>
      )
    }

    return (
      <Layout>
        { routes }
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
