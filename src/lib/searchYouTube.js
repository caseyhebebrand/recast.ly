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
      console.log('success', data);
      callback(data.items);
    },
    error: (e) => {
      console.log('error', e);
    }
  });
};

window.searchYouTube = searchYouTube;
