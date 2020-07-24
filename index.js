function formatData(data) {
  for (let i = 0; i < 6; i++) {
    const item = data.items[i];
    const source = item.media.m;
    $(".main-content").append(`<img src="${source}"/>`);
  }
}

function apiCall() {
  const url = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  $.getJSON(url, {
    format: 'json'
  }).done(function(response) {
    formatData(response);
  });
}

$(document).ready(function() {
  apiCall();
})