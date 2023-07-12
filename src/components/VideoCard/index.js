import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  ThumbnailImg,
  VideoDescriptionContainer,
  VideoDescriptionBodyContainer,
  Profileimg,
  Name,
  ViewCountContainer,
  Title,
  ViewsCount,
  VideoLink,
  Dot,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    title,
    name,
    profileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails

  const publishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const fontColor = darkTheme ? '#f9f9f9' : '#475569'

        return (
          <VideoCardContainer>
            <VideoLink to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescriptionContainer>
                <Profileimg src={profileImageUrl} alt="channel logo" />
                <VideoDescriptionBodyContainer>
                  <Name font={fontColor}>{title}</Name>
                  <Title>{name}</Title>
                  <ViewCountContainer>
                    <ViewsCount>{viewCount}</ViewsCount>
                    <Dot>.</Dot>
                    <ViewsCount>{publishedDate}</ViewsCount>
                  </ViewCountContainer>
                </VideoDescriptionBodyContainer>
              </VideoDescriptionContainer>
            </VideoLink>
          </VideoCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
