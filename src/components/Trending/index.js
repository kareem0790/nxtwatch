import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiTwotoneFire} from 'react-icons/ai'
import Header from '../Header'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import FilterGroup from '../FilterGroup'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeContext from '../../context/ThemeContext'

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
  LoaderContainer,
  NoResultContent,
  RetryButton,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureContent,
} from './styledComponents'

const apiStatusList = {
  apiInitial: 'INITIAL',
  apiSuccess: 'SUCCESS',
  apiFailure: 'FAILURE',
  apiLoading: 'LOADING',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusList.apiInitial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusList.apiLoading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        title: each.title,
        name: each.channel.name,
        channelProfileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusList.apiSuccess,
        trendingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusList.apiFailure})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  noVideosView = () => (
    <NoVideosContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultsFound>No Search results found</NoResultsFound>
      <NoResultContent>
        Try different key words or remove search filter
      </NoResultContent>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  failureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const darkBgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
        const themedImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const fontColor = darkTheme ? '#1e293b' : '#f9f9f9'
        return (
          <FailureContainer background={darkBgColor}>
            <FailureImg src={themedImg} alt="failure view" />
            <FailureHeading font={fontColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureContent>
              We are having some trouble to complete your request. <br />
              Please try again.
            </FailureContent>
            <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderResults = () => {
    const {trendingVideosList} = this.state
    const videosListLength = trendingVideosList.length > 0

    return (
      <TrendingMainContainer>
        {videosListLength ? (
          <VideoListContainer>
            {trendingVideosList.map(eachVideo => (
              <TrendingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </VideoListContainer>
        ) : (
          this.noVideosView()
        )}
      </TrendingMainContainer>
    )
  }

  loadingSpinner = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const loaderColor = darkTheme ? '#ffffff' : '#00306e'

        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={loaderColor}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  showStatusOfSwitchStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusList.apiLoading:
        return this.loadingSpinner()
      case apiStatusList.apiSuccess:
        return this.renderResults()
      case apiStatusList.apiFailure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const darkBgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <AppContainer bgColor={darkBgColor}>
              <Header />
              <ResponsiveContainer>
                <FilterGroupContainer>
                  <FilterGroup />
                </FilterGroupContainer>
                <BodyContainer bgColor={darkBgColor} data-testid="trending">
                  <TrendingLogoContainer>
                    <TrendingIconContainer>
                      <AiTwotoneFire />
                    </TrendingIconContainer>
                    <TrendingHeading>Trending</TrendingHeading>
                  </TrendingLogoContainer>
                  {this.showStatusOfSwitchStatus()}
                </BodyContainer>
              </ResponsiveContainer>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
