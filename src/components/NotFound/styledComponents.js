import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  margin: auto;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 90px;
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: auto;
  }
`

export const FilterGroupContainer = styled.div`
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BodyContainer = styled.div`
  width: 80%;
  border-radius: 3px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`

export const NotFoundImg = styled.img`
  width: 30%;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.font};
  font-size: 20px;
  font-weight: 600;
`

export const NotFoundContent = styled.p`
  font-family: 'Roboto';
  color: ${props => props.font};
  font-size: 16px;
`
