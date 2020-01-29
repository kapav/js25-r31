import React, {Component} from 'react'
import classes from './index.module.css'
import Button from '../../components/ui/button'
import Input from '../../components/ui/input'

export default class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Почта',
        errorMessage: 'Введите правильную почту',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите правильный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }
  loginHandler = () => {

  }
  registerHandler = () => {

  }
  submitHandler = event => {
    event.preventDefault()
  }
  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}:`, event.target.value)
  }
  renderInputs() {
    return Object.keys(this.state.formControls)
      .map((controlName, index) => {
        const control = this.state.formControls[controlName]
        return (
          <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={event => this.onChangeHandler(event, controlName)}
          />
        )
      })
  }
  render() {
    return (
      <div className={classes.auth}>
        <div>
          <h1>Авторизация</h1>
          <form
            onSubmit={this.submitHandler}
            className={classes.authForm}
          >
            { this.renderInputs() }
            <Button
              type="success"
              onClick={this.loginHandler}
            >
              Войти
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
