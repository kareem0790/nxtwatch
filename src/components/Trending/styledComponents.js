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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
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
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`
export const TrendingMainContainer = styled.div`
  background-color: '#e2e8f0';
  margin: auto;
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
  width: 30%;
`

export const NoResultsFound = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  font-weight: 600;
`

export const NoResultContent = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
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
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.background};
`

export const FailureImg = styled.img`
  width: 60%;
`
export const FailureHeading = styled.h1`
  color: ${props => props.font};
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const FailureContent = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
`
