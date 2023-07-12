import styled from 'styled-components'

export const TrendingLogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 3px;
  background-color: #cbd5e1;
  padding-left: 40px;
  border: none;
`

export const TrendingIconContainer = styled.div`
  background-color: #94a3b8;
  border-radius: 40px;
  padding: 10px;
  height: 50px;
  width: 50px;
  margin-right: 20px;
  color: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  color: #1e293b;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  margin: auto;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 90px;
  margin: auto;
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
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`
export const TrendingMainContainer = styled.div`
  background-color: '#e2e8f0';
  margin: auto;
  width: 100%;
`

export const VideoListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`
export const NoVideosImg = styled.img`
  width: 50%;
`

export const NoResultsFound = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.font};
  font-weight: 600;
`

export const NoResultContent = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.font};
`
