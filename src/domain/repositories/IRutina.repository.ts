import { RutinaEntity } from "../entities/Rutina.entity";

export interface IRutinaRepository {
    save(rutina: RutinaEntity): Promise<RutinaEntity | null>;
    delete(_id: string): Promise<boolean | null>;
    getById(_id: string): Promise<RutinaEntity | null>;
    getAll(): Promise<RutinaEntity[] | null>;
    update(_id: string, rutina: RutinaEntity): Promise<RutinaEntity | null>;
    filterByCreator(creator: string): Promise<RutinaEntity[] | null>;
    daylyRoutineSummary(): Promise<RutinaEntity[] | null>;
    // filterByObjective(objective: string): Promise<RutinaEntity[]>;
    // filterByDifficulty(difficulty: string): Promise<RutinaEntity[]>;
    // filterByDuration(duration: number): Promise<RutinaEntity[]>;
    // filterByDay(day: string): Promise<RutinaEntity[]>;
    // filterByExercise(exercise: string): Promise<RutinaEntity[]>;

}
