import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  height: 90px;
  display: flex;
  background-color: ${props => props.background};
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin: auto;
  top: 0pxx;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const WebsiteLogo = styled.img`
  width: 120px;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ProfileImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 30px;
  margin-left: 30px;
  height: 30px;
`

export const HambergButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  height: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }
  color: #3b82f6;
  background-color: transparent;
  border-radius: 10px;
  margin-left: 20px;
  border: 1px solid #3b82f6;
  font-weight: 600;
  outline: none;
  padding: 0px;
  cursor: pointer;
  padding: 8px 16px 8px 16px;
`
export const SmallLogoutButton = styled.button`
@media screen and (min-width:768px){
    display:none;
}
border:none;
outline:none;
margin-left:10px;
cursor:pointer;
padding:0px;
background-color: transparent;   
}
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ff0b37;
`

export const ListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`

export const Listitem = styled.li`
  list-style-type: none;
  color: ${props => props.color};
`
export const LogoutContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
`
export const LogoutContent = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.font};
  font-weight: 500;
  margin-bottom: 30px;
`

export const LogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
`
export const CancelButton = styled.button`
  color: #475569;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 8px 16px 8px 16px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #475569;
`
export const ConformButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  padding: 8px 16px 8px 16px;
  border-radius: 10px;
  cursor: pointer;
`
