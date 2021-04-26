const grid = document.querySelector('.grid');

const fetchBooks = async () => {
  try {
    const res = await fetch('books.json');
    const books = await res.json();
    return books;
  } catch (error) {
    console.warn(error);
  }
};

const loadBook = (book) => {
  const { title, author } = book;

  const html = `
        <div aria-author=${author} class="book">
            <div class="book__cover"><p>${title}</p></div>
            <div class="book__side"></div>
            <div class="book__footer"></div>
        </div>
  `;

  grid.insertAdjacentHTML('beforeend', html);
};

const loadPage = async () => {
  try {
    const books = await fetchBooks();
    books.forEach(loadBook);
  } catch (error) {
    console.warn(error);
  }
};

loadPage();
