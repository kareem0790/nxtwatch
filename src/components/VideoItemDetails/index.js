import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import FilterGroup from '../FilterGroup'

import {
  AppContainer,
  ResponsiveContainer,
  FilterGroupContainer,
  BodyContainer,
  FailVideosContainer,
  SmallLogoContainer,
  NoVideosImg,
  NoResultsFound,
  NoResultContent,
  RetryButton,
  VideoItemContainer,
  ReactPlayerIcon,
  ReactLargePlayerIcon,
  ChannelName,
  LikeCountContainer,
  CountContainer,
  Views,
  Published,
  LikeContainer,
  Button,
  Like,
  Dislike,
  Save,
  Liketag,
  DiLiketag,
  Savetag,
  LoaderContainer,
  Logo,
  TitleContainer,
  Subscriber,
  VideoLogoSmallBottomContainer,
  SmallDescription,
  LargeDescription,
  MainTitle,
} from './styledComponents'

const apiStatusList = {
  apiInitial: 'INITIAL',
  apiSuccess: 'SUCCESS',
  apiFailure: 'FAILURE',
  apiLoading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetailsList: [],
    apiStatus: apiStatusList.apiInitial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusList.apiLoading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = {
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoItemDetailsList: updatedData,
        apiStatus: apiStatusList.apiSuccess,
      })
    } else {
      this.setState({apiStatus: apiStatusList.apiFailure})
    }
  }

  onClickRetry = () => {
    this.getVideoItemDetails()
  }

  noVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const fontColor = darkTheme ? '#f9f9f9' : '#1e293b'
        return (
          <FailVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <NoResultsFound fontColor={fontColor}>
              Oops! Something Went Wrong
            </NoResultsFound>
            <NoResultContent>
              We are having some trouble to complete your request. <br />
              Please try again.
            </NoResultContent>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {onAddVideoList, savedVideos, darkTheme} = value

        const {videoItemDetailsList, isLiked, isDisliked} = this.state

        const {
          channelName,
          profileImageUrl,
          subscriberCount,
          description,
          id,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoItemDetailsList

        let isSaved

        const onClickSave = () => {
          onAddVideoList(videoItemDetailsList)
        }
        const index = savedVideos.findIndex(each => each.id === id)

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const savedText = isSaved ? 'Saved' : 'Save'
        const channelNameFont = darkTheme ? '#f9f9f9' : '#1e293b'
        const descriptionFont = darkTheme ? '#f9f9f9' : '#475569'
        const publishedDate = formatDistanceToNow(new Date(publishedAt))

        return (
          <VideoItemContainer>
            <ReactPlayerIcon width="100%" url={videoUrl} controls />
            <ReactLargePlayerIcon width="100%" url={videoUrl} controls />
            <MainTitle title={channelNameFont}>{title}</MainTitle>
            <LikeCountContainer>
              <CountContainer>
                <Views>{viewCount}</Views>.
                <Published>{publishedDate}</Published>
              </CountContainer>
              <LikeContainer>
                <Button type="button" onClick={this.onClickLike}>
                  <Liketag outline={isLiked} />
                  <Like outline={isLiked}>Like</Like>
                </Button>
                <Button type="button" onClick={this.onClickDislike}>
                  <DiLiketag outline={isDisliked} />
                  <Dislike outline={isDisliked}>Dislike</Dislike>
                </Button>
                <Button type="button" onClick={onClickSave}>
                  <Savetag outline={isSaved} />
                  <Save outline={isSaved}>{savedText}</Save>
                </Button>
              </LikeContainer>
            </LikeCountContainer>
            <hr />
            <VideoLogoSmallBottomContainer>
              <SmallLogoContainer>
                <Logo src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <ChannelName font={channelNameFont}>
                    {channelName}
                  </ChannelName>
                  <Subscriber>{subscriberCount} subscribers</Subscriber>
                  <LargeDescription font={descriptionFont}>
                    {description}
                  </LargeDescription>
                </TitleContainer>
              </SmallLogoContainer>
              <SmallDescription font={descriptionFont}>
                {description}
              </SmallDescription>
            </VideoLogoSmallBottomContainer>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

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
        return this.noVideosView()
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
                <BodyContainer
                  bgColor={darkBgColor}
                  data-testid="videoItemDetails"
                >
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

export default VideoItemDetails
