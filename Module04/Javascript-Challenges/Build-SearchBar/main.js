const names = Array.from(document.querySelectorAll('.name'));
const search = document.getElementById('searchBar');
const arrOfNames = arrNames();

search.addEventListener('keyup', () => {
  let inputValue = search.value.toLowerCase().split(/[ ,]+/);
  console.log(names);;
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

function nodeListToArray(params) {
    
}



function searchOfList(arrInputs) {
  for (let index = 0; index < arrInputs.length; index++) {
    let nameFound = arrOfNames.find((name) => name == arrInputs[index]);
    console.log(nameFound);
    let targetIndex = arrOfNames.indexOf(nameFound);
    console.log(targetIndex);
    if (nameFound) {

      
      names.splice(targetIndex, 1);

      names.forEach((item) => {
        item.style.opacity = 0.3;
      });

      names[targetIndex].style.backgroundColor = '#a2d0c1';

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
