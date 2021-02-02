function quetipoSoy<T>( argumento: T){
    return argumento;
}

let soyString = quetipoSoy('Cadena');
let soyNumero = quetipoSoy(9000);
let soyExplicito = quetipoSoy<number>( 900 );