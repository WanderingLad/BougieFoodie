var apiKey ='AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M';
var search = document.getElementById("btn");
var input = document.getElementById("input");

function getApi() {
    var url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+input.value+'&key=AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M'
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
}  
search.addEventListener('click',getApi);