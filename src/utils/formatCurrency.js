export default function currency(value) {
    return value = value.toLocaleString('pt-br', {style: 'currency', currency : 'brl'})
}