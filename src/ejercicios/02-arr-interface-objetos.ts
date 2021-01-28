let habilidades: string[] = ['bash', 'counter', 'healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Danny',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);
