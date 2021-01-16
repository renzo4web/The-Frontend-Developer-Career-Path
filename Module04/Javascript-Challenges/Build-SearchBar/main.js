const names = Array.from(document.querySelectorAll('.name'));
const search = document.getElementById('searchBar');
const arrOfNames = arrNames();

search.addEventListener('keyup', () => {
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

function nodeListToArray(params) {
    
}



function searchOfList(arrInputs) {


  for (let index = 0; index < arrInputs.length; index++) {
    let nameFound = arrOfNames.find((name) => name == arrInputs[index]);
    console.log(nameFound);
    let targetIndex = arrOfNames.indexOf(nameFound);
    console.log(targetIndex);
    if (nameFound) {
     
      names[targetIndex].classList.add("selected")

    }
  }

  /*g.forEach(name=>{
    name.classList.remove("name")
    name.style.backgroundColor = "dodgerblue"
  })*/




}


function resetStyles() {
  names.forEach((li) => {
    li.style.backgroundColor = '';
   li.classList.remove("non-selected")
  });
}
