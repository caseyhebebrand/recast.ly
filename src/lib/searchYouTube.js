var searchYouTube = (options, callback) => {
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: {
      'key': options.key,
      'maxResults': options.max,
      'q': options.query,
      'part': 'snippet',
      'type': 'video',
      'videoEmbeddable': true
    },
    contentType: 'application/json',
    success: (data) => {
      console.log('success', data.items);
      callback(data.items);
      // var setVideos = (videos) => {
      //   console.log('ready to reset state');
      //   console.log(videos);
      //   this.setState(
      //     {'videos': videos,
      //       'selected': videos[0]
      //     });
      //   console.log(this.state);
      // };
    },
    error: (e) => {
      console.log('error', e);
    }
  });
};

window.searchYouTube = searchYouTube;
