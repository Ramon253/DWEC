function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    var classes = document.getElementsByClassName('e1w6mdco0 gamut-1xr3zm5-ResetElement-createButtonComponent e1bhhzie0');
    var Rate = classes[0];
    Rate.click();
    await sleep(1000);
    Rate.click();

    var classes2 = document.getElementsByClassName('easbmjx0 gamut-1mlpowj-ResetElement-createButtonComponent e1bhhzie0');
    var Rate2 = classes2[0];
    Rate2.click();

    await sleep(1000);
    var classes3 = document.getElementsByClassName('e1w6mdco0 gamut-1tme0h-ResetElement-createButtonComponent e1bhhzie0');
    var Rate3 = classes3[0];
    Rate3.click();

    await sleep(1000);
    var classes4 = document.getElementsByClassName('e1w6mdco0 gamut-18luxs6-ResetElement-createButtonComponent e1bhhzie0');
    var Rate4 = classes4[0];
    Rate4.click();
}

for(let i=0; i<9; i++){
    main();
    await sleep(5000);
    main();
}