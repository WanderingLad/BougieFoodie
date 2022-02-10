var apiKey ='AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M';
var search = document.getElementById("btn");
var input = document.getElementById("input");
var ytbox= document.getElementById("ytvids")

function getApi() {
    var url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=how+to+make'+input.value+'&key=AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M'
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data.items[0].id.videoId);
        $("#video").attr('src',"https://www.youtube.com/embed/"+data.items[0].id.videoId)
    });
}  
search.addEventListener('click',getApi);