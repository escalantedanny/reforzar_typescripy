interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Danny'
}

const pasajero2: Pasajero = {
    nombre: 'Maria',
    hijos: [ 'Santiago', 'Daniel']
}

function imprimirHijos( pasajero: Pasajero ): void {
    const cuantosHijos =  pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
    
}

imprimirHijos(pasajero1);