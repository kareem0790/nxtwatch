import styled from 'styled-components'

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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const FilterGroupContainer = styled.div`
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BodyContainer = styled.div`
  width: 80%;
  background-color: ${props => props.bgColor};
  border-radius: 3px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`

export const HomeMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin: auto;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 200px;
  background-size: cover;
  padding-left: 30px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`

export const BannerLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BannerImg = styled.img`
  width: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const BannerCroosButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const BannerHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  font-weight: 600;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 8px 16px 8px 16px;
  outline: none;
  align-self: flex-start;
  cursor: pointer;
  border-radius: 3px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid ${props => (props.border ? '#909090' : '#e2e8f0')};
  background-color: transparent;
  background-color: transparent;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    width: 450px;
    margin-top: 10px;
  }
`
export const SearchInput = styled.input`
  outline: none;
  width: 100%;
  border: none;
  cursor: pointer;
  background: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
  height: 40px;
  padding-left: 20px;
`

export const SearchButton = styled.button`
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 1px solid ${props => (props.border ? '#909090' : '#e2e8f0')};
  background-color: transparent;
  outline: none;
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
  background-color: ${props => props.background};
  margin-top: 30px;
  justify-content: center;
`
export const NoVideosImg = styled.img`
  width: 30%;
`

export const NoResultsFound = styled.h1`
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
