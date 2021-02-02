function sumar( a:number, b:number): number{
    return a + b;
}

const sumarFlecha = ( a:number , b:number):number => {
    return a + b;
}

function multipicar(numero:number, otronumero?:number, base:number = 2):number{
    return numero * base;
}

const resultado = multipicar(20, 50, 30);

interface PersonajeLOR {
    nombre:string;
    pv:number;
    mostrarHP: () => void;
}

function curar( personaje: PersonajeLOR, curarX:number):void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Danny',
    pv: 50,
    mostrarHP(){
        console.log('Los puntos de vida son: ' + this.pv);
        
    }
}

curar(nuevoPersonaje, 50);

nuevoPersonaje.mostrarHP();
