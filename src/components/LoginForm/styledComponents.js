import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.form`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
  width: 320px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0.5px;
  height: 400px;
  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 30px;
    padding-bottom: 20px;
  }
`
export const LogoImage = styled.img`
  width: 120px;
  align-self: center;
  margin-bottom: 40px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`
export const LabelInput = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#94a3b8')};
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const UserInput = styled.input`
  height: 40px;
  font-size: 16px;
  background-color: transparent;
  width: 100%;
  color: ${props => (props.darkTheme ? '#ffffff' : '#94a3b8')};
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

export const InputCheckbox = styled.input`
  margin-right: 10px;
`

export const CheckboxLabelInput = styled.label`
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#94a3b8')};
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background-color: #4f46e5;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 16px 10px 16px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 14px;
`
