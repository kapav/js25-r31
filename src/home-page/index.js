import React, {Component} from 'react'
import Layout from '../hoc/layout'
import {Route, Switch} from 'react-router-dom'
import Quiz from '../containers/quiz'
import QuizList from '../containers/quiz-list'
import Auth from '../containers/auth'
import QuizCreator from '../containers/quiz-creator'

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    )
  }
}

export default HomePage
