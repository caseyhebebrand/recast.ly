// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selected: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //componentDidMount
    //do an initial search 
  componentDidMount() {
    this.searchVideos('cats');
  }

  // search function
    //creates callback
    // runs search youtube
  searchVideos (query) {
    var setVideos = (videos) => {
      console.log('ready to reset state');
      console.log(videos[0]);
      this.setState(
        {videos: videos,
          selected: videos[0]
        });
      console.log(this.state);
    };

    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };

    // console.log(options);
  
    
    this.props.searchYouTube(options, setVideos);
    //console.log('new state:', this.state.videos, this.state.selected);
  }


  handleClick(video) {
    this.setState(
      {selected: video}
    );
  }
  
  render() {
    if (Object.keys(this.state.selected).length === 0 || this.state.videos.length === 0) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> view goes here</h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              VideoPlayer
            </div>
            <div className="col-md-5">
              VideoList
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selected}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} select={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
