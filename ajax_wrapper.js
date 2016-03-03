var OMDB = function(undefined) {
    var URL = 'http://www.omdbapi.com/';

    _getTVEpisode = function (tv_series_name, season_number, episode_number) {
        var query = URL+'?t='+encodeURI(tv_series_name)+'&Season='+season_number+'&Episode='+episode_number;
        return _proxy('GET', query );
    };

    _proxy = function(method, url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.withCredentials = true;
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
        getTVEpisode: _getTVEpisode
    }
}();

//Try it
OMDB.getTVEpisode("Game of thrones",1,1).then(function(response){console.log("%o",response)});