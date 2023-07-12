import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {AiFillLike, AiFillDislike, AiFillPlusSquare} from 'react-icons/ai'

export const Liketag = styled(AiFillLike)`
  width: 30px;
  height: 30px;
  color: ${props => (props.outline ? '#4f46e5' : '#475569')};
`

export const DiLiketag = styled(AiFillDislike)`
  width: 30px;
  height: 30px;
  color: ${props => (props.outline ? '#4f46e5' : '#475569')};
`
export const Savetag = styled(AiFillPlusSquare)`
  width: 30px;
  height: 30px;
  color: ${props => (props.outline ? '#4f46e5' : '#475569')};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ReactPlayerIcon = styled(ReactPlayer)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ReactLargePlayerIcon = styled(ReactPlayer)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const AppContainer = styled.div`
  min-height: 100vh;
  margin: auto;
  background-color: ${props => props.bgColor};
`
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  padding-top: 90px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: auto;
  }
`

export const FilterGroupContainer = styled.div`
  width: 20%;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BodyContainer = styled.div`
  width: 80%;
  padding-top: 20px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`
export const FailVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`
export const NoVideosImg = styled.img`
  width: 30%;
`

export const NoResultsFound = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.fontColor};
  font-weight: 600;
`

export const NoResultContent = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 8px 20px 8px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const VideoItemContainer = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  margin-bottom: 20px;
`
export const ChannelName = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.font};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const MainTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.title};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const LikeCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`

export const Published = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
`

export const Like = styled.p`
  color: ${props => (props.outline ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
`
export const Dislike = styled.p`
  color: ${props => (props.outline ? '#2563eb' : '#64748b')};
  margin-left: 10px;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
`

export const Save = styled.p`
  color: ${props => (props.outline ? '#2563eb' : '#64748b')};
  margin-left: 10px;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
`
export const VideoLogoSmallBottomContainer = styled.div``

export const SmallLogoContainer = styled.div`
  display: flex;
`
export const Logo = styled.img`
  width: 60px;
  margin-top: 20px;
  height: 60px;
  margin-right: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
`
export const Subscriber = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  margin: 0px;
`
export const SmallDescription = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.font};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LargeDescription = styled.p`
  font-family: 'Roboto';
  margin-top: 30px;
  font-size: 14px;
  color: ${props => props.font};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
