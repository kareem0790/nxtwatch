import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FilterGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  height: 90vh;
  position: sticky;
  top: 90px;
  padding: 10px;
  border-radius: 3px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  background-color: ${props => (props.background ? '#212121' : '#ffffff')};
  flex-direction: column;
`
export const ListItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  list-style-type: none;
  margin-bottom: 10px;
`
export const ListContent = styled.span`
  font-family: 'Roboto';
  text-decoration: none;
  width: 100%;
  font-size: 16px;
  margin-left: 20px;
  color: ${props => props.font};
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactUs = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.font};
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const FacebookLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const TwitterLogo = styled.img`
  height: 30px;
  margin-right: 10px;
  width: 30px;
`

export const LinkedinLogo = styled.img`
  height: 30px;
  width: 30px;
`

export const ContactUsContent = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.font};
`
