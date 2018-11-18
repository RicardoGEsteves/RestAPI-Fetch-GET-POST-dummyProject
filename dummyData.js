document.getElementById('getText').addEventListener('click', getText => {
    fetch('dummyData.txt')
     .then((res) => res.text())
     .then((data) => {
         document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
 });