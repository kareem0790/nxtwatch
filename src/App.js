import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import SavedVideos from './components/SavedVideo'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
    activeId: 'Home',
  }

  onAddVideoList = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(each => each.id === video.id)
    if (index === -1) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  onChangeDarkTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  changeActiveTab = value => {
    this.setState({activeId: value})
  }

  render() {
    const {darkTheme, activeId, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          savedVideos,
          activeId,
          changeActiveTab: this.changeActiveTab,
          onChangeDarkTheme: this.onChangeDarkTheme,
          onAddVideoList: this.onAddVideoList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/bad-path" component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
