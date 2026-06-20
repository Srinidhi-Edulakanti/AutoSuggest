function randomUser(){
    fetch("https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8")
       .then(function(res){
           return res.json();
       })
       
