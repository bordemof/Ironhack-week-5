var Spotify = function(undefined) {
    var URL = 'https://api.spotify.com/v1/';

    _searchArtist = function (artist) {
        var query = 'search?type=artist&query='+encodeURI(artist)
        return _proxy('GET', query );
    };

    _searchAlbum = function (album) {
        var query = 'search?type=album&query='+encodeURI(album)
        return _proxy('GET', query );
    };

    _getArtistAlbums = function(artist_id) {
        var query = 'artists/'+artist_id+'/albums'
        return _proxy('GET', query );
    };

    _getAlbumTracks = function(album_id) {
        var query = 'albums/'+album_id+'/tracks'
        return _proxy('GET', query );
    };

    _proxy = function(method, url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.open(method, URL + url);
            xhr.withCredentials = false;
            xhr.responseType = 'json';

            xhr.onload = function() {
                if (xhr.status === 200){
                    resolve(xhr.response);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };

            xhr.onerror = function() {
                reject(new Error('Error'));
            }

            xhr.send();
        });
    };

    return {
        searchArtist    : _searchArtist,
        searchAlbum     : _searchAlbum,
        getArtistAlbums : _getArtistAlbums,
        getAlbumTracks  : _getAlbumTracks
    }
}();

// Try it
// Iteration 1:
Spotify.searchArtist("supersubmarina").then(function(response){console.log("%o",response)});
// Iteration 2:
Spotify.getArtistAlbums("49Av22K1Doe8E6AfQrdWeI").then(function(response){console.log("%o",response)});
// Iteration 3:
Spotify.getAlbumTracks("61C3cEhdoJ9YiQSQSwYB4K").then(function(response){console.log("%o",response)});
// Chain 3 request
Spotify.searchArtist("supersubmarina").then(function(response) {
    var firstResultId = response.artists.items[0].id;
    Spotify.getArtistAlbums(firstResultId).then(function(response) {
        var firstResultId = response.items[0].id;
        Spotify.getAlbumTracks(firstResultId).then(function(response) {
            console.log("%o 3",response.items[5].preview_url);
            var preview = document.createElement('audio');
            preview.src = response.items[5].preview_url;
            document.body.appendChild(preview);
            preview.play();
        });
    });
});