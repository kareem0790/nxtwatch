import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginFormContainer,
  InputContainer,
  LabelInput,
  UserInput,
  InputCheckbox,
  LogoImage,
  CheckboxContainer,
  LoginButton,
  ErrorMsg,
  CheckboxLabelInput,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const userData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)

    const data = await response.json()

    if (response.status === 200) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      errorMsg,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <LoginContainer darkTheme>
              <LoginFormContainer darkTheme onSubmit={this.onSubmitForm}>
                <LogoImage
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>
                  <LabelInput htmlFor="username">USERNAME</LabelInput>
                  <UserInput
                    onChange={this.onChangeUsername}
                    id="username"
                    placeholder="Username"
                    type="text"
                    value={username}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelInput htmlFor="password">PASSWORD</LabelInput>
                  <UserInput
                    onChange={this.onChangePassword}
                    placeholder="Password"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                  />
                </InputContainer>
                <CheckboxContainer>
                  <InputCheckbox
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangeCheckbox}
                  />
                  <CheckboxLabelInput htmlFor="checkbox">
                    Show Password
                  </CheckboxLabelInput>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
