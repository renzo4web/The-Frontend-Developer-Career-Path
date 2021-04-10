//

const promiseRandom = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomBool 
      ? resolve('🕶 Batman is here') 
      : reject(new Error('✈ hero is on vacation'));
    }, 4000);
  });
};

const randomBool = Boolean(Math.round(Math.random())); // returns either 0 or 1

(async function () {
  try {
    const result = await promiseRandom();
    console.log(result);
  } catch (err) {
    console.warn(err);
  }
})();
