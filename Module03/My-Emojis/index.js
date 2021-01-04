let inputEmojis = document.querySelector('input');
const emojiContainer = document.getElementById('emojiContainer');
let emojiArray = Array.from(inputEmojis.value);
//btn's
const btnShift = document.getElementById('shift');
const btnUnshift = document.getElementById('unshift');
const btnPush = document.getElementById('push');
const btnPop = document.getElementById('pop');




function resetInputValue(){
  inputEmojis.value = '';
}






//Display Emojis
function displayEmojis() {

  emojiContainer.innerHTML = '';

  for (let index = 0; index < emojiArray.length; index++) {
    let emojiSpan = document.createElement('span');
    emojiSpan.textContent = emojiArray[index];
    emojiContainer.append(emojiSpan)
  }

}

//🥺🥳😅🥺🥺✨

////Remove from Array listeners

btnPop.addEventListener('click', () => {
  emojiArray.pop();
  displayEmojis();
});

btnShift.addEventListener('click', () => {
  emojiArray.shift();
  displayEmojis();
});

//Add to array Listeners
btnUnshift.addEventListener('click', () => {
  emojiArray.unshift(inputEmojis.value);
  resetInputValue()
  displayEmojis();
});


btnPush.addEventListener('click', () => {
  emojiArray.push(inputEmojis.value);
  resetInputValue()
  displayEmojis();
});
