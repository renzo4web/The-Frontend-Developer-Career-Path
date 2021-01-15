const names = document.querySelectorAll('.name');
const search = document.getElementById('searchBar');
const arrOfNames = arrNames();

search.addEventListener('keyup', (event) => {
  let inputValue = search.value.toLowerCase().split(/[ ,]+/);

  resetStyles();

  searchOfList(inputValue);
});

function arrNames() {
  let arr = [];

  names.forEach((name) => {
    arr.push(name.textContent.toLowerCase());
  });

  return arr;
}

function searchOfList(arrInputs) {
  for (let index = 0; index < arrInputs.length; index++) {
    let nameFound = arrOfNames.find((name) => name == arrInputs[index]);
    console.log(nameFound);
    let targetIndex = arrOfNames.indexOf(nameFound);
    if (nameFound) {
      names[targetIndex].style.backgroundColor = 'red';
    }
  }
}

/*

function singleQueryParam(inputParam) {
  let nameFound = arrOfNames.find((name) => name == inputParam);

  let targetIndex = arrOfNames.indexOf(nameFound);
  if (nameFound) {
    names[targetIndex].style.backgroundColor = 'red';
  } else {
    resetStyles();
  }
  console.log(nameFound);
}*/

function resetStyles() {
  names.forEach((li) => {
    li.style.backgroundColor = '';
  });
}
