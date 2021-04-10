let active = 0;
let lights = document.querySelectorAll('.circle');
let delay = 2000;

const switchLight = (currentLight) => {
  currentLight.classList.add(currentLight.getAttribute('color'));
};
const turnOffLight = (currentLight) => {
  currentLight.className = 'circle';
};

const changeLight = async () => {
  return new Promise((resolve, reject) => {
    const currentLight = lights[active];
    const change = () => {
      switchLight(currentLight);
      setTimeout(() => {
        resolve(turnOffLight(currentLight));
        active ++
        delay += 1000;
        resolve(active);
      }, delay);
    };
    change()
  });
};

(async function () {
  try {
    console.log(active);
    await changeLight();
    await changeLight();
    await changeLight();
  } catch (err) {
    console.log(err);
  }
})();
