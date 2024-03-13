import { ExerciseEntity } from "../entities/Ejercicio.entity";

export class Dia {
    dia: string;
    ejercicios: ExerciseEntity[];
    duracion: number;
  
    constructor(dia: string, ejercicios: ExerciseEntity[]) {
        this.dia = dia;
        this.duracion = ejercicios.reduce((acc, curr) => acc + curr.duration, 0);
        this.ejercicios = ejercicios;
    }
}