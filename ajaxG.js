document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('deleteBtn').disabled = true;

    let searchTerm = document.getElementById('search').value;

    axios.get('https://api.giphy.com/v1/gifs/search', {
       params: {
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
        q: searchTerm,
        limit: 1
       } 
    })
    .then(function(response) {
        console.log(response.data);
        let imageUrl = response.data.data[0].images.original.url;
        let gifElement = document.createElement('img');
        gifElement.src = imageUrl;
        document.getElementById('gifContainer').appendChild(gifElement);
        document.getElementById('deleteBtn').disabled = false;
    })
    .catch(function(error) {
        console.log(error);
    });
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    document.getElementById('gifContainer').innerHTML = '';
});