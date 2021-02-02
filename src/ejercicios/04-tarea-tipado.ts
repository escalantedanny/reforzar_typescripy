interface SuperHeroe {
    nombre:string;
    edad:number;
    direccion:Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle:string;
    pais:string;
    ciudad:string;
}

const superHeroe:SuperHeroe = {
    nombre: 'spiderman',
    edad: 30,
    direccion: {
        calle:'main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ' '+ this.edad +' '+ this.direccion.pais;
    }
}

const direc = superHeroe.mostrarDireccion();
console.log(direc);
