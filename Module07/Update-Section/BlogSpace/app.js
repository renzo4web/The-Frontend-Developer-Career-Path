class Blog {
  constructor() {
    this.$form = document.querySelector("#form");
    this.$articles = document.querySelector("#articles");
    this.$alert = document.querySelector(".error-alert");

    this.inputs = ["title", "body"];

    this.startPost();
    this.initEvents();
  }

  initEvents() {
    this.$form.addEventListener("submit", this.getValues.bind(this));
  }

  getValues(e) {
    e.preventDefault();
    const inputData = new FormData(document.forms.form);
    const [titleInput, bodyInput] = this.inputs.map((input) =>
      inputData.get(input)
    );

    this.post({ titleInput, bodyInput });
    this.$form.reset();
  }
  async asyncWrapper(promise) {
    const [result] = await Promise.allSettled([promise]);
    return result;
  }

  async makePost(title, body) {
    const generateRandomId = () => new Date().valueOf();

    return await this.asyncWrapper(
      fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
          userId: generateRandomId(),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    );
  }

  async getPosts() {
    return await this.asyncWrapper(
      fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    );
  }

  hasError(status, reason) {
    if (status === "rejected") {
      console.log(status, reason);
      this.$alert.classList.remove("invisible");
      this.$alert.textContent = reason;
      setTimeout(() => {
        this.$alert.classList.add("invisible");
      }, 2000);
      return true;
    }
    return false;
  }

  async post({ titleInput = "", bodyInput = "" }) {
    const { reason, value, status } = await this.makePost(
      titleInput,
      bodyInput
    );

    if (this.hasError(status, reason)) return;

    const post = await value.json();
    this.displayPost(post);
  }

  htmlPost({ body, id, title }) {
    return `
    <article data-id=${id}>
        <h4 class="article-title">${title}</h4>
        <p class="article-body">${body}</p>
        <hr />
      </article>
    `;
  }

  async startPost() {
    const { reason, value, status } = await this.getPosts();
    if (this.hasError(status, reason)) return;
    const data = await value.json();

    data.slice(0, 5).forEach(this.displayPost.bind(this));
  }

  displayPost(post) {
    this.$articles.insertAdjacentHTML("afterbegin", this.htmlPost(post));
  }
}

new Blog();
