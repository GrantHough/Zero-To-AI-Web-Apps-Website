let get = document.querySelector("#get");

get.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            for (prop in data) {
                console.log(prop + ": " + data[prop]);
            }
        })
});

let post = document.querySelector("#post");
let postTitle = document.querySelector("#title");
let postContent = document.querySelector("#content");
let postUserId = document.querySelector("#userId");

post.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: postTitle.value,
          body: postContent.value,
          userId: postUserId.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            for (prop in data) {
                console.log(prop + ": " + data[prop]);
            }
        })
});

