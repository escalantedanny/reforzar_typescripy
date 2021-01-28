import { Producto, calcularIVA } from './pruebas';

const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 19900
    },
    {
        desc: 'telefono 2',
        precio: 29990
    },
    {
        desc: 'telefono 3',
        precio: 39000
    }
];

const [ total, iva ] = calcularIVA( carritoCompras );

console.log('el total es: ', total);
console.log('el iva es: ', iva);