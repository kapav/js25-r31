import React, {Component} from 'react'
import Layout from '../hoc/layout'
import Quiz from '../containers/quiz'

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    )
  }
}

export default HomePage
