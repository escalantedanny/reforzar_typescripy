class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal {

    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor( 
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string 
    ){ 
        super( nombreReal, 'NY' );
    }

}

const ironman = new Heroe( 'ironman', 37, 'Danny Escalante' );

console.log(ironman);
