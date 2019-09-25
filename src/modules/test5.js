const id = 5;
let obj = {};

function getId(id) {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.find(elem => elem.id === id);
      //console.log(`Test 5. Object with id ${id}:`);
    });
}

getId(id).then(result => {
  if (result) {
    console.log(`Test 5. Object with id ${id}: `, result);
  } else {
    console.log("No Data");
  }
});
