


$(document).ready(function () {
  $('#search-btn').on('click', function () {
      var searchTerm = $('#search-term').val();
      searchFlickrImages(searchTerm);
  });

  function searchFlickrImages(searchTerm) {
      var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";

      $.getJSON(url, function (data) {
          displayResults(data);
      }).fail(function () {
          alert('Error retrieving images from Flickr.');
      });
  }

  function displayResults(data) {
      $('#search-results').empty();
      if (data.items.length > 0) {
          data.items.forEach(function (item) {
              var imageUrl = item.media.m;
              var imgElement = $('<img>').attr('src', imageUrl);
              $('#search-results').append(imgElement);
          });
      } else {
          $('#search-results').append('<p>No images found.</p>');
      }
  }
});
