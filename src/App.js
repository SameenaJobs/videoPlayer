import React from 'react';
import './App.css';
import SearchBar from './components/search';
import YouTubeSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoInfo from './components/video_info';
const API_KEY = 'AIzaSyDgBmdSoaTmjwKl6yxskbslMG33R1PdtH0';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput:'',
      isLoaded: false,
      videos:[],
      selectedVideo: null
    };
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleSearch();
  }

  handleChange = e => {
    this.setState({searchInput: e.target.value});
    // console.log(this.state.searchInput);
  }
  handleSearch() {
    
    const term = this.state.searchInput;
    if(term !== '') {
      this.setState({
        isLoaded: true
      });
      YouTubeSearch({key: API_KEY, term: term}, (data) =>{
        this.setState({
          videos: data,
          selectedVideo : data[0],
          isLoaded: false 
        });
      });
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar isLoaded={this.state.isLoaded} searchInput={this.state.searchInput} handleSearch={this.handleSearch} handleChange={this.handleChange}/>
        <div className="row">
          <VideoInfo video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}