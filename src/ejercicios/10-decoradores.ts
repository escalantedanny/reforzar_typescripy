function classDecorator<T extends { new (...args: any[]): {} }>(
        constructor: T
    ) {
        return class extends constructor {
        newProperty = "new property";
        hello = "override";
        };
    }

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'cadenadecoradores';

    imprimir() {
        console.log('hola mundo');
        
    }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();

