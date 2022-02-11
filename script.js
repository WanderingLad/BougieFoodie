var apiKey = 'AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M';
var search = document.getElementById("btn");
var input = document.getElementById("input");

// function getApi() {
//     var url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+input.value+'&key=AIzaSyB84GbD7RpiItTnqRXSgGmgQdDJOOYUx8M'
//     fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });
// }  
// search.addEventListener('click',getApi);


//-------

// When user searches in main bar, I need to grab value
var storeItem = localStorage.getItem("history");//JSON.parse (return)
storeItem = JSON.parse(storeItem)
var results = [];
search.onclick = savedResults;

function savedResults() {
  var saveValue = input.value;
  results.push(saveValue);
  localStorage.setItem("history", JSON.stringify(results));
  //JSON.stringify results
}
// Needs to save to previous search section
// I want all the values to remain on the page
