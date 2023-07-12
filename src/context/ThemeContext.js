import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  savedVideos: [],
  activeId: 'Home',
  onAddVideoList: () => {},
  onChangeDarkTheme: () => {},
  changeActiveTab: () => {},
})

export default ThemeContext
