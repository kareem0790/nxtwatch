import {Component} from 'react'

import {AiTwotoneFire} from 'react-icons/ai'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import FilterGroup from '../FilterGroup'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  FilterGroupContainer,
  BodyContainer,
  TrendingMainContainer,
  VideoListContainer,
  AppContainer,
  TrendingLogoContainer,
  ResponsiveContainer,
  TrendingIconContainer,
  TrendingHeading,
  NoVideosContainer,
  NoVideosImg,
  NoResultsFound,
  NoResultContent,
} from './styledComponents'

class SavedVideos extends Component {
  noSavedVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const noResultsFoundfont = darkTheme ? '#f9f9f9' : '#1e293b'
        const noResultContent = darkTheme ? '#f9f9f9' : '#475569'
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoResultsFound font={noResultsFoundfont}>
              No saved videos found
            </NoResultsFound>
            <NoResultContent font={noResultContent}>
              You can save your videos while watching them
            </NoResultContent>
          </NoVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideos} = value

        return (
          <TrendingMainContainer>
            <TrendingLogoContainer>
              <TrendingIconContainer>
                <AiTwotoneFire />
              </TrendingIconContainer>
              <TrendingHeading>Saved Videos</TrendingHeading>
            </TrendingLogoContainer>
            <VideoListContainer>
              {savedVideos.map(eachVideo => (
                <TrendingVideoCard
                  videoDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </VideoListContainer>
          </TrendingMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVideos, darkTheme} = value
          const darkBgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <AppContainer bgColor={darkBgColor}>
              <Header />
              <ResponsiveContainer>
                <FilterGroupContainer>
                  <FilterGroup />
                </FilterGroupContainer>
                <BodyContainer bgColor={darkBgColor} data-testid="savedVideos">
                  {savedVideos.length > 0
                    ? this.renderResults()
                    : this.noSavedVideosView()}
                </BodyContainer>
              </ResponsiveContainer>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
