import { v4 as uuid } from 'uuid';
import { ExerciseEntity } from './Ejercicio.entity';

export class RutinaEntity {
    id: string;
    user: string;
    dia: string;
    ejercicios: ExerciseEntity[];
    duracion: number;
    muscleGroup: string[];

    constructor(data: Partial<RutinaEntity>) {
        this.id = uuid();
        this.user = data.user!;
        this.dia = data.dia!;
        const ejercicios = data.ejercicios!.map(ejercicio => new ExerciseEntity(ejercicio));
        this.ejercicios = ejercicios!;
        this.duracion = data.ejercicios!.reduce((acc, curr) => acc + curr.duration, 0);
        const muscleGroupsUnicos = [...new Set(ejercicios.flatMap(ejercicio => ejercicio.muscleGroup))];
        console.log(muscleGroupsUnicos);
        this.muscleGroup = muscleGroupsUnicos!;
    }
    
}