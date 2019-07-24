import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyDdleMnsHqijEUah2EoLjoQvn4kEN1h7Z4';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await axios.get('/search', {
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: term
      }
    });
    //the selectedVideo parameter is set to show a default video detail on screen
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  // this is just to have a default search element producing some default components on screen
  componentDidMount(){
    this.onTermSubmit('rem');
  }

  // callback method used to communicate from child to parent (in this case to let the VideoItem tell the App component that it has been clicked)
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail vid={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
