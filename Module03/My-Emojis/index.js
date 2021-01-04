let inputEmojis = document.querySelector('input');
const emojiContainer = document.getElementById('emojiContainer');
let emojiArray;

//btn's
const btnShift = document.getElementById('shift');
const btnUnshift = document.getElementById('unshift');
const btnPush = document.getElementById('push');
const btnPop = document.getElementById('pop');

function getEmojis() {
  emojiArray = Array.from(inputEmojis.value);
  console.log(emojiArray);
}

inputEmojis.addEventListener('input', getEmojis);

//Display Emojis
function displayEmojis() {
  emojiArray.forEach((element) => {
    emojiContainer.append(element);
  });
}

//🥺🥳🥺🥺🥺

////Remove from Array listeners

btnPop.addEventListener('click', () => emojiArray.pop());
btnShift.addEventListener('click', () => emojiArray.shift());

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
