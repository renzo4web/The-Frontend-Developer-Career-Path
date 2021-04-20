const mainContainer = document.querySelector('.flexbox-container');
const fullImgContainer = document.querySelector('.fullimg-container');

const getPhotoMetadata = async () => {
  try {
    const results = await fetch('photos.json');
    const data = await results.json();
    console.log(data);
    return data;
  } catch (error) {
    console.warn(error);
  }
};

const getPhotoUrl = (id, size) => {
  return `https://picsum.photos/id/${id}/${size}/${size}`;
};

const renderPhotos = (data, container, size = 200) => {
  for (const { id, title } of data) {
  }

  const html = data
    .map(({ id, title }) => {
      return `<img data-id="${id}" src="${getPhotoUrl(
        id,
        size
      )}" alt="${title}"></img>`;
    })
    .join('');

  container.innerHTML = '';
  container.insertAdjacentHTML('afterbegin', html);
};

const handleClick = (event) => {
  const {
    alt,
    dataset: { id },
  } = event.currentTarget;
  renderPhotos([{ id, alt }], fullImgContainer, 400);
};

const runEvents = () => {
  const photos = mainContainer.querySelectorAll('img');
  photos.forEach((photo) => photo.addEventListener('click', handleClick));
};

async function init() {
  try {
    const photosId = await getPhotoMetadata();
    renderPhotos(photosId, mainContainer);
    runEvents();
  } catch (error) {}
}

init();
