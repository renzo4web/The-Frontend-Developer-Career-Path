let inputEmojis = document.querySelector('input');
const emojiContainer = document.getElementById('emojiContainer');
let emojiArray = Array.from(inputEmojis.value);
//btn's
const btnShift = document.getElementById('shift');
const btnUnshift = document.getElementById('unshift');
const btnPush = document.getElementById('push');
const btnPop = document.getElementById('pop');

function getEmojis() {
  emojiArray = Array.from(inputEmojis.value);
  console.log(emojiArray);
}

//inputEmojis.addEventListener('input', getEmojis);





//Display Emojis
function displayEmojis() {
  let emojis = [];
  emojiContainer.innerHTML = '';
  for (let index = 0; index < emojiArray.length; index++) {
    let emojiSpan = document.createElement('span');
    emojiSpan.textContent = emojiArray[index];
    emojis.push(emojiSpan);
  }

  console.log(emojis);
  emojis.forEach((element) => {
    emojiContainer.append(element);
  });
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
  inputEmojis.value = '';
  displayEmojis();
});


btnPush.addEventListener('click', () => {
  emojiArray.push(inputEmojis.value);
  inputEmojis.value = '';
  displayEmojis();
});
