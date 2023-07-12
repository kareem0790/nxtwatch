import ThemeContext from '../../context/ThemeContext'

import {
  GamingListItemContainer,
  GamingThumbnailImg,
  GameHeading,
  GamingContentContainer,
  GameViewCount,
  VideoLink,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const fontColor = darkTheme ? '#f9f9f9' : '#1e293b'

        return (
          <GamingListItemContainer>
            <VideoLink className="link" to={`/videos/${id}`}>
              <GamingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentContainer>
                <GameHeading font={fontColor}>{title}</GameHeading>
                <GameViewCount>{viewCount} Watching Worldwide</GameViewCount>
              </GamingContentContainer>
            </VideoLink>
          </GamingListItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
