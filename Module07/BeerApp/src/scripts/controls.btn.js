const getBtns = () => {

    let g = [];
    const selectors = ['hoppiness', 'alcohol'];

    g.push(
        [document.getElementById(`btnPageRight`),
            document.getElementById(`btnPageLeft`)]
    );

    for (const selector of selectors) {
        g.push(
            [document.getElementById(`${selector}-vol-all`),
            document.getElementById(`${selector}-vol-min`),
            document.getElementById(`${selector}-vol-medium`),
            document.getElementById(`${selector}-vol-max`)]
        );
    }



    return g;

};


const disabledAllBtns = (isDisabled) => {
    getBtns().forEach(btn => btn.disabled = (isDisabled));
};


export {
    getBtns,
    disabledAllBtns
};