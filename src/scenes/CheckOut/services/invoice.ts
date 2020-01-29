export const getInvoiceNumber = () =>
    Math.floor(Math.pow(10, 7) + Math.random() * 9 * Math.pow(10, 7));
