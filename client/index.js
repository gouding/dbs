console.log('ddd')
const fetchData = () => {
  fetch('http://localhost:3000/user', {
    method: 'GET',
    mode: 'cors',
    // credentials:'omit'
  }).then(res => res.text())
    .then(res => {
      document.getElementById('root').innerHTML=res;
    })
}

fetchData();