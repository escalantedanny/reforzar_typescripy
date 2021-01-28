
/*
    desestructuracion de objetos
*/

interface Reproductor {
    volumen: number;
    segundos: number;
    cancion: string;
    detalles: Detalle;
}

interface Detalle {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundos: 36,
    cancion: 'de los buenos tiempos',
    detalles: {
        autor: 'King',
        anio: 2021
    }
}

const { volumen, segundos, cancion, detalles } = reproductor;
const { autor, anio } =  detalles;

console.log('el volumen actual', volumen);
console.log('el segundo actual', segundos);
console.log('la cancion actual', cancion);
console.log('el autor actual', autor);
console.log('el anio actual', anio);

/*
    desestructuracion de arreglos
*/

const dbz:string[] = ['goku', 'vegeta', 'trunks'];

const [ primero, segundo, tercero ] = dbz;

console.log('personaje 1: ', primero);
console.log('personaje 2: ', segundo);
console.log('personaje 3: ', tercero);

