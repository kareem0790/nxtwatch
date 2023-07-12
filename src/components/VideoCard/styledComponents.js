import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 100%;
  margin: auto;
  list-style-type: none;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 15px;
    height: 350px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  text-decoration: none;
`

export const VideoDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
`

export const Profileimg = styled.img`
  width: 30px;
  text-align: center;
  margin-top: 20px;
  text-decoration: none;
`

export const VideoDescriptionBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  text-decoration: none;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: ${props => props.font};
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
`
export const ViewCountContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  text-decoration: none;
  font-size: 18px;
  margin: 0px;
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  color: #475569;
  text-decoration: none;
  font-size: 16px;
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
