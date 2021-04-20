const root = document.querySelector('.root');
const numOfColors = 100;


const getColors = async (count) => {
  try {
    const colorResponse = await fetch(
      `https://www.colr.org/json/colors/random/${count}`
    );
    const { colors } = await colorResponse.json();
    console.log(colors);
    return colors;
  } catch (error) {
    console.warn(error);
  }
};

const renderColors = (colors) => {
  const genericColors = { hex: 'ff0000', tags: [{ name: 'red' }] };

  const html = colors
    .map((col) => {
      const { hex, tags } = col.hex ? col : genericColors;

      const colorTags = tags
        .map(({ name }) => name[0].toUpperCase() + name.slice(1))
        .join(' ');

      return `<li style="background-color: #${hex}">
      <p>${colorTags}</p><p>#${hex.toUpperCase()}</p>
      </li>`;
    }).join('');

  const ul = document.createElement('ul');
  ul.insertAdjacentHTML('afterbegin', html);
  root.insertAdjacentElement('afterbegin', ul);
};

async function init() {
  try {
    const colors = await getColors(numOfColors);
    renderColors(colors);
    // console.log(colors);
  } catch (error) {
    console.warn(error);
  }
}

init();
