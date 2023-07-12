import {AiTwotoneFire, AiFillHome, AiFillPlusSquare} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'

import {
  FilterGroupContainer,
  ListContainer,
  ContactUsContainer,
  ContactUs,
  ListItem,
  ListContent,
  FacebookLogo,
  IconsContainer,
  TwitterLogo,
  LinkedinLogo,
  ContactUsContent,
  LinkItem,
} from './styledComponents'

const FilterGroup = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, changeActiveTab, activeId} = value
      const background = darkTheme ? '#212121' : '#ffffff'
      const fontColor = darkTheme ? '#ffffff' : '#475569'

      return (
        <FilterGroupContainer bgColor={background}>
          <ListContainer background={darkTheme}>
            <LinkItem to="/">
              <ListItem onClick={() => changeActiveTab('Home')}>
                <AiFillHome
                  size={30}
                  color={activeId === 'Home' ? '#ff0b37' : '#909090'}
                />
                <ListContent font={fontColor}>Home</ListContent>
              </ListItem>
            </LinkItem>

            <LinkItem to="/trending">
              <ListItem onClick={() => changeActiveTab('Trending')}>
                <AiTwotoneFire
                  size={30}
                  color={activeId === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <ListContent font={fontColor}>Trending</ListContent>
              </ListItem>
            </LinkItem>

            <LinkItem to="/gaming">
              <ListItem onClick={() => changeActiveTab('Gaming')}>
                <SiYoutubegaming
                  size={30}
                  color={activeId === 'Gaming' ? '#ff0b37' : '#909090'}
                />
                <ListContent font={fontColor}>Gaming</ListContent>
              </ListItem>
            </LinkItem>
            <LinkItem to="/saved-videos">
              <ListItem onClick={() => changeActiveTab('SavedVideos')}>
                <AiFillPlusSquare
                  size={30}
                  color={activeId === 'SavedVideos' ? '#ff0b37' : '#909090'}
                />
                <ListContent font={fontColor}>Saved Videos</ListContent>
              </ListItem>
            </LinkItem>
          </ListContainer>
          <ContactUsContainer>
            <ContactUs font={fontColor}>CONTACT US</ContactUs>
            <IconsContainer>
              <FacebookLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <TwitterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LinkedinLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <ContactUsContent font={fontColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsContent>
          </ContactUsContainer>
        </FilterGroupContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default FilterGroup
