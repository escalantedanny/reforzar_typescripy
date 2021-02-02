/**
 * desestructuracion de
 */

interface Productos {
    desc:string;
    precio:number;
}

const producto:Productos = {
    desc: 'mayonesa',
    precio: 2990
}

const telefono:Productos = {
    desc: 'porrealto',
    precio: 400
}

const tableta:Productos = {
    desc: 'pichilemu',
    precio: 3240
}




function calculo( productos: Productos[] ):[number, number]{
    let total = 0;

    productos.forEach( ( {precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [ telefono, tableta ];

const [ total, iva ] = calculo( articulos );

console.log('total es: ',total);
console.log('iva es: ',iva);
