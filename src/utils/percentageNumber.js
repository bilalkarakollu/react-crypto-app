export const percentageNumber = (value) => {
    return value.toFixed(2) + '%';
}

export const percentColor = (value) => {
    if (value > 0) {
        return 'green';
    } else if (value < 0) {
        return 'red';
    } else {
        return 'black';
    }
}

export const sparklineURL = (image) => {
    const URLArray = image.split('/');
    return `https://www.coingecko.com/coins/${URLArray[5]}/sparkline`;
}