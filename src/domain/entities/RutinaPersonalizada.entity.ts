import { v4 as uuid } from 'uuid';
import { Dia } from '../value_objects/Dia';

export class RutinaPersonalizadaEntity {
    id: string;
    nombre: string;
    descripcion: string;
    creador: string;
    objetivo: string;
    nivelDificultad: string;
    dias: Dia[];

    constructor(data: Partial<RutinaPersonalizadaEntity>) {
        this.id = uuid();
        this.nombre = data.nombre!;
        this.descripcion = data.descripcion!;
        this.creador = data.creador!;
        this.objetivo = data.objetivo!;
        this.nivelDificultad = data.nivelDificultad!;
        const dias = data.dias!.map(dia => new Dia(dia.dia, dia.ejercicios));
        this.dias = dias!;
    }
    
}