var apiKey ='AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M';  

$("#search-bar").submit(function (event) 
{
  event.preventDefault();
  
  var searchFieldVal = $("#search-field").val();

  var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=how+to+make+${searchFieldVal}&key=AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M`;

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {

    $("#video").attr('src',"https://www.youtube.com/embed/"+data.items[0].id.videoId)

  });
}  );