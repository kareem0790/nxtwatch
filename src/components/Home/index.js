import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import VideoCard from '../VideoCard'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeMainContainer,
  SearchContainer,
  FilterGroupContainer,
  BodyContainer,
  LoaderContainer,
  SearchInput,
  RetryButton,
  AppContainer,
  BannerButton,
  ResponsiveContainer,
  BannerHeading,
  BannerContainer,
  SearchButton,
  BannerLogoContainer,
  NoResultsFound,
  NoResultContent,
  NoVideosImg,
  NoVideosContainer,
  BannerCroosButton,
  BannerImg,
  VideoListContainer,
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
class Home extends Component {
  state = {
    apiStatus: apiStatusList.apiInitial,
    searchInput: '',
    showBanner: true,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    this.setState({apiStatus: apiStatusList.apiLoading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(video => ({
        title: video.title,
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))

      this.setState({
        videosList: updatedData,
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getVideosApi()
  }

  onClickRetry = () => {
    this.getVideosApi()
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderShowBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerLogoContainer>
        <BannerImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCroosButton
          type="button"
          onClick={this.onCloseBanner}
          data-testid="close"
        >
          X
        </BannerCroosButton>
      </BannerLogoContainer>
      <BannerHeading>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerHeading>
      <BannerButton type="button">GET IT NOW</BannerButton>
    </BannerContainer>
  )

  noVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const darkBgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'

        return (
          <NoVideosContainer background={darkBgColor}>
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
      }}
    </ThemeContext.Consumer>
  )

  renderResults = () => {
    const {videosList, searchInput, showBanner} = this.state
    const videosListLength = videosList.length > 0

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const darkBgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const SearchdarkBgColor = darkTheme ? '#f9f9f9' : '#181818'

          return (
            <HomeMainContainer bgColor={darkBgColor}>
              {showBanner && this.renderShowBanner()}
              <SearchContainer border={darkTheme}>
                <SearchInput
                  value={searchInput}
                  placeholder="Search"
                  type="search"
                  onChange={this.onChangeSearchInput}
                />
                <SearchButton
                  data-testid="searchButton"
                  border={darkTheme}
                  type="button"
                  onClick={this.onClickSearchButton}
                >
                  <AiOutlineSearch size={20} color={SearchdarkBgColor} />
                </SearchButton>
              </SearchContainer>

              {videosListLength ? (
                <VideoListContainer>
                  {videosList.map(each => (
                    <VideoCard videoDetails={each} key={each.id} />
                  ))}
                </VideoListContainer>
              ) : (
                this.noVideosView()
              )}
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
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
          const darkBgColor = darkTheme ? '#181818' : '#f9f9f9'
          return (
            <AppContainer bgColor={darkBgColor}>
              <Header />
              <ResponsiveContainer>
                <FilterGroupContainer>
                  <FilterGroup />
                </FilterGroupContainer>
                <BodyContainer bgColor={darkBgColor} data-testid="home">
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
export default Home
