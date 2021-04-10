const taskW = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('W');
    }, 1000);
  });
};
const taskO = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('O');
    }, 500);
  });
};
const taskExclaim = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('!');
    }, Math.floor(Math.random() * 1000));
  });
};
const taskSmiley = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(':)');
    }, 300);
  });
};

// execute taskW append W to wow
// execute taskW and taskO in parallel and append result to wow
// execute taskExclaim and taskSmiley in race condition append result to wow
// get either WOW! or WOW:) depending on the random value of taskExclaim timeout

(async function () {
  try {
    const wowPart = (await Promise.all([taskW(), taskO(), taskW()])).join('');
    const exclaimOrSmyley = await Promise.race([taskExclaim(), taskSmiley()]);
    let wow = await `${wowPart}${exclaimOrSmyley}`;
    console.log(wow);
  } catch (err) {
    console.log(err);
  }
})();
