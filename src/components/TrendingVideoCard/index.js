import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingVideoListItemContainer,
  TrendingThumbnailImg,
  TrendingVideoBodyContainer,
  TrendingVideoProfileImg,
  TrendingVideoContentContainer,
  TrendingVideoTitle,
  ChannelNameContainer,
  ChannelName,
  ViewContainer,
  ViewCount,
  PublishedDate,
  VideoLink,
  SmallChannelName,
  Dot,
  DotHidden,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    title,
    name,
    channelProfileImageUrl,
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
        const fontColor = darkTheme ? '#f9f9f9' : '#1e293b'

        return (
          <VideoLink to={`/videos/${id}`}>
            <TrendingVideoListItemContainer>
              <TrendingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoBodyContainer>
                <TrendingVideoProfileImg
                  src={channelProfileImageUrl}
                  alt={`channelName ${id}`}
                />
                <TrendingVideoContentContainer>
                  <TrendingVideoTitle font={fontColor}>
                    {title}
                  </TrendingVideoTitle>

                  <ChannelNameContainer>
                    <ChannelName>{name} </ChannelName>
                    <ViewContainer>
                      <SmallChannelName>{name} </SmallChannelName>
                      <DotHidden>.</DotHidden>
                      <ViewCount>{viewCount} Views </ViewCount>
                      <Dot>.</Dot>
                      <PublishedDate>{publishedDate}</PublishedDate>
                    </ViewContainer>
                  </ChannelNameContainer>
                </TrendingVideoContentContainer>
              </TrendingVideoBodyContainer>
            </TrendingVideoListItemContainer>
          </VideoLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
