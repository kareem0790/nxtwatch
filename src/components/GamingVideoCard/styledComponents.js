import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItemContainer = styled.div`
  list-style-type: none;
  width: 40%;
  margin-bottom: 15px;
  margin-right: 20px;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    width: 25%;
  }
`
export const GamingThumbnailImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`
export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GameHeading = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.font};
  margin: 2px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  margin: 0px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
