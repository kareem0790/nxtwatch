import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {BsSun} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  SmallLogoutButton,
  ListContainer,
  HambergButton,
  Listitem,
  CancelButton,
  ConformButton,
  LinkItem,
  LogoutButtonContainer,
  ProfileImg,
  PopupContainer,
  LogoutContainer,
  LogoutContent,
  IconContainer,
  WebsiteLogo,
  LogoutButton,
  ThemeButton,
} from './styledComponents'

const Header = props => {
  const onLogoutPage = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme, onChangeDarkTheme, activeId, changeActiveTab} = value
        const themeImg = darkTheme ? (
          <BsSun size={25} color="#f9f9f9" />
        ) : (
          <FaMoon size={25} />
        )
        const bgColor = darkTheme ? '#212121' : '#f9f9f9'
        const logoutFont = darkTheme ? '#f9f9f9' : '#3b82f6'

        const websiteLogo = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onChangeTheme = () => {
          onChangeDarkTheme()
        }
        return (
          <HeaderContainer background={bgColor}>
            <LinkItem to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </LinkItem>
            <IconContainer>
              <ThemeButton onClick={onChangeTheme} data-testid="theme">
                {themeImg}
              </ThemeButton>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <HambergButton type="button">
                    <GiHamburgerMenu
                      size={25}
                      color={darkTheme ? '#f9f9f9' : '#181818'}
                    />
                  </HambergButton>
                }
                className="popup-content"
              >
                {close => (
                  <PopupContainer>
                    <AiOutlineClose size={20} onClick={() => close()} />
                    <ListContainer>
                      <div>
                        <LinkItem to="/">
                          <Listitem
                            onClick={() => changeActiveTab('Home')}
                            color={activeId === 'Home' ? '#ff0b37' : '#909090'}
                          >
                            Home
                          </Listitem>
                        </LinkItem>
                        <LinkItem to="/trending">
                          <Listitem
                            onClick={() => changeActiveTab('Trending')}
                            color={
                              activeId === 'Trending' ? '#ff0b37' : '#909090'
                            }
                          >
                            Trending
                          </Listitem>
                        </LinkItem>
                        <LinkItem to="/gaming">
                          <Listitem
                            onClick={() => changeActiveTab('Gaming')}
                            color={
                              activeId === 'Gaming' ? '#ff0b37' : '#909090'
                            }
                          >
                            Gaming
                          </Listitem>
                        </LinkItem>
                        <LinkItem to="/saved-videos">
                          <Listitem
                            onClick={() => changeActiveTab('SavedVideos')}
                            color={
                              activeId === 'SavedVideos' ? '#ff0b37' : '#909090'
                            }
                          >
                            Saved Videos
                          </Listitem>
                        </LinkItem>
                      </div>
                    </ListContainer>
                  </PopupContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={<LogoutButton type="button">Logout</LogoutButton>}
                className="popup-content"
              >
                {close => (
                  <LogoutContainer bgColor={bgColor}>
                    <LogoutContent font={logoutFont}>
                      Are you sure, you want to logout
                    </LogoutContent>
                    <LogoutButtonContainer>
                      <CancelButton onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConformButton onClick={onLogoutPage}>
                        Confirm
                      </ConformButton>
                    </LogoutButtonContainer>
                  </LogoutContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <SmallLogoutButton type="button" onClick={onLogoutPage}>
                    <FiLogOut
                      size={25}
                      color={darkTheme ? '#f9f9f9' : '#181818'}
                    />
                  </SmallLogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutContainer bgColor={bgColor}>
                    <LogoutContent font={logoutFont}>
                      Are you sure, you want to logout
                    </LogoutContent>
                    <LogoutButtonContainer>
                      <CancelButton onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConformButton onClick={onLogoutPage}>
                        Confirm
                      </ConformButton>
                    </LogoutButtonContainer>
                  </LogoutContainer>
                )}
              </Popup>
            </IconContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
