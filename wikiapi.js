var search = document.getElementById("btn");
var input = document.getElementById("input");
var wikiFrame = document.getElementById("wikiframe");
search.addEventListener('click', getWiki);
function getWiki(){
    var englishWiki = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=" + input.value;
    fetch(englishWiki)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        console.log(data.query.search[0].snippet)
        wikiFrame.setAttribute("src", "http://en.wikipedia.org/?curid="+ data.query.search[0].pageid);
    });
}