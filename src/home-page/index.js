import React, {Component} from 'react'
import Layout from '../hoc/layout'

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div style={{width: 400, border: '1px solid black'}}>
          <h1>Макет вопросника</h1>
        </div>
      </Layout>
    )
  }
}

export default HomePage
