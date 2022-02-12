 $("#search-bar").submit(function (event)
 {
     event.preventDefault();

     var searchFieldVal = $("#search-field").val();
     var wikiFrame = $('#wikiframe');
     var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${searchFieldVal}`;

     fetch(url)
     .then(function(response){
         return response.json();
     })
     .then(function(data){
         console.log(data)
         //$("#wiki-text-area").text(data.query.search[0].title);
         console.log(data.query.search[0].snippet)
         wikiFrame.attr("src", "http://en.wikipedia.org/?curid="+ data.query.search[0].pageid);
     });
 })

 