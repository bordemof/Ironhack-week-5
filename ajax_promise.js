var ajaxAwesome = function(method, url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.withCredentials = true; // Cross-site allowed
        xhr.responseType = 'json';

        xhr.onload = function() {
            if (xhr.status === 200){
                resolve(xhr.response); // Response ok
            } else {
                reject(new Error(xhr.statusText)); // Response error
            }
        };

        xhr.onerror = function() {
            reject(new Error('Error')); // Request crash
        }

        xhr.send();
    });
};

// Test it
ajaxAwesome('GET','http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&Episode=1').then(function(response){
   console.log('%o',response);
})