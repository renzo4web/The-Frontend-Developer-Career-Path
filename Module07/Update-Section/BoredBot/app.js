class Bot {
  constructor() {
    this.$button = document.querySelector("#btn-bored");
    this.$message = document.querySelector(".bored-message");

    this.initEvents();
  }

  async asyncWrapper(promise) {
    const [result] = await Promise.allSettled([promise]);
    return result;
  }

  async getRandomMessage() {
    return this.asyncWrapper(fetch("https://www.boredapi.com/api/activity"));
  }

  async displayMessage() {
    this.$button.disabled = true;

    const { reason, value: message = "No messages at the moment 😞" } =
      await this.getRandomMessage();

    const msg = await message.json();
    console.log(msg);
    this.$message.innerHTML = `
                <h3>${msg.activity}</h3>
                ${msg.link && `<a href="${msg.link}">Link</a>`}
            `;
    this.$message.classList.toggle("show");
    this.$button.disabled = false;
  }

  initEvents() {
    this.$button.addEventListener("click", this.displayMessage.bind(this));
  }
}

new Bot();
