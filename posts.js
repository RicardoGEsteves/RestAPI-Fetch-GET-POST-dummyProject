document.getElementById('getPosts').addEventListener('click', getPosts => {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then((res) => res.json())
     .then((data) => {
         let output = '<h2>Posts</h2>';
         data.forEach((post) => {
             output += `
             <div>
             <h3>${post.title}</h3>
             <p>${post.body} </p>
             </div>
             `;
         });
         document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))
 });
 
