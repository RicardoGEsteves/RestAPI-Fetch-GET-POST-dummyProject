document.getElementById('addPost').addEventListener('submit', addPost = e => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title:title,
             body:body
            }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json; charset=UTF-8'
        }
    })
     .then((res) => res.json())
     .then((data) => console.log(data))
 });