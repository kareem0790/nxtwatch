import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const TrendingVideoListItemContainer = styled.li`
  width: 100%;
  margin-bottom: 10px;
  margin-right: 20px;
  list-style-type: none;
  @media screen and (min-width: 577px) {
    display: flex;
    margin-bottom: 20px;
  }
`

export const TrendingThumbnailImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 577px) {
    min-width: 50%;
    margin-right: 20px;
  }
`
export const TrendingVideoBodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (min-width: 577px) {
    width: 50%;
  }
`
export const TrendingVideoProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-top: 10px;
  @media screen and (min-width: 577px) {
    display: none;
  }
`

export const TrendingVideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.font};
`

export const ChannelNameContainer = styled.div`
  display: flex;

  @media screen and (min-width: 577px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const Dot = styled.span`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 28px;
`

export const DotHidden = styled.span`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 28px;
  @media screen and (min-width: 577px) {
    display: none;
  }
`

export const SmallChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ViewContainer = styled.div`
  display: flex;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
`
