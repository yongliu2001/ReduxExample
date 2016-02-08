import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDmAbS8RQUGGGaPp90rzZ8Q2BcOUJMnQhA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos        : [],
      selectedVideo : null
    };

    YTSearch({key: API_KEY, term: 'surfboards'},
            (videos) => {
                this.setState({
                  videos : videos,
                  selectedVideo: videos[0]
                });
            });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}
          onVideoSelect={(video) => this.setState({selectedVideo: video})} />
      </div>
    );
  }
}

//take this component's generated html and put on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
