import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Header from '../Header'
import GamingVideoCard from '../GamingVideoCard'
import FilterGroup from '../FilterGroup'
import ThemeContext from '../../context/ThemeContext'
import {
  AppContainer,
  ResponsiveContainer,
  FilterGroupContainer,
  BodyContainer,
  GamingLogoContainer,
  LoaderContainer,
  GamingIconContainer,
  GamingHeading,
  NoVideosContainer,
  NoVideosImg,
  NoResultsFound,
  NoResultContent,
  RetryButton,
  GamingMainContainer,
  GamingListContainer,
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

class Gaming extends Component {
  state = {
    gamingVideoList: [],
    apiStatus: apiStatusList.apiInitial,
  }

  componentDidMount() {
    this.getGamingVideosApi()
  }

  getGamingVideosApi = async () => {
    this.setState({apiStatus: apiStatusList.apiLoading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({
        gamingVideoList: updatedData,
        apiStatus: apiStatusList.apiSuccess,
      })
    } else {
      this.setState({apiStatus: apiStatusList.apiFailure})
    }
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

  onClickRetry = () => {
    this.getGamingVideosApi()
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

  renderResults = () => {
    const {gamingVideoList} = this.state
    const videosListLength = gamingVideoList.length > 0

    return (
      <GamingMainContainer>
        {videosListLength ? (
          <GamingListContainer>
            {gamingVideoList.map(eachVideo => (
              <GamingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </GamingListContainer>
        ) : (
          this.noVideosView()
        )}
      </GamingMainContainer>
    )
  }

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
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <AppContainer bgColor={bgColor}>
              <Header />
              <ResponsiveContainer>
                <FilterGroupContainer>
                  <FilterGroup />
                </FilterGroupContainer>
                <BodyContainer bgColor={bgColor} data-testid="gaming">
                  <GamingLogoContainer>
                    <GamingIconContainer>
                      <SiYoutubegaming />
                    </GamingIconContainer>
                    <GamingHeading>Gaming</GamingHeading>
                  </GamingLogoContainer>
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

export default Gaming
