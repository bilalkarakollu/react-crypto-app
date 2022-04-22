export const currencyFormat = (value) => {

    return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(value)

}