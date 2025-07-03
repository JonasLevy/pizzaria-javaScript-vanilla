export function currencyFormatter(value) {
    const formattedBRL = Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formattedBRL
}
