document.getElementById('getUsers').addEventListener('click', getUsers => {
    fetch('users.json')
     .then((res) => res.json())
     .then((data) => {
         let output = '<h2>Users</h2>';
         data.forEach((user) => {
             output += `
             <ul>
             <li>ID: ${user.id}</li>
             <li>First Name: ${user.firstName}</li>
             <li>Last Name: ${user.lastName}</li>
             <li>Email: ${user.email}</li>
             </ul>
             `;
         });
         document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))
 });