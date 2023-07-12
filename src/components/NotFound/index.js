import Header from '../Header'
import FilterGroup from '../FilterGroup'
import ThemeContext from '../../context/ThemeContext'

import {
  AppContainer,
  ResponsiveContainer,
  FilterGroupContainer,
  BodyContainer,
  NotFoundImg,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundContent,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const darkBgColor = darkTheme ? '#181818' : '#f9f9f9'
      const headingFont = darkTheme ? '#f9f9f9' : '#313131'
      const headingContent = darkTheme ? '#f9f9f9' : '#313131'
      const darkImg = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <AppContainer bgColor={darkBgColor}>
          <Header />
          <ResponsiveContainer>
            <FilterGroupContainer>
              <FilterGroup />
            </FilterGroupContainer>
            <BodyContainer>
              <NotFoundContainer>
                <NotFoundImg src={darkImg} alt="not found" />
                <NotFoundHeading font={headingFont}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundContent font={headingContent}>
                  we are sorry, the page you requested could not be found.
                </NotFoundContent>
              </NotFoundContainer>
            </BodyContainer>
          </ResponsiveContainer>
        </AppContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
