import { IRutinaRepository } from "../../../domain/repositories/IRutina.repository";
import { RutinaEntity } from "../../../domain/entities/Rutina.entity";

const MOCK_RUTINA : RutinaEntity = {
    id: "1",
    user: "1",
    dia: "1",
    ejercicios: [],
    duracion: 1,
    muscleGroup: ["1"]
}

class MockRepository implements IRutinaRepository {
    
    async save(rutinaIn: RutinaEntity): Promise<RutinaEntity> {
        return MOCK_RUTINA;
    }

    async delete(id: string): Promise<boolean> {
        return true;
    }

    async getById(id: string): Promise<RutinaEntity | null> {
        return MOCK_RUTINA;
    }

    async getAll(): Promise<RutinaEntity[] | null> {
        return [MOCK_RUTINA,MOCK_RUTINA,MOCK_RUTINA];
    }

    async update(id:string, rutina: RutinaEntity): Promise<RutinaEntity | null> {
        return MOCK_RUTINA;
    }

    async filterByCreator(creator: string): Promise<RutinaEntity[] | null> {
        return [MOCK_RUTINA,MOCK_RUTINA];
    }

    async daylyRoutineSummary(): Promise<RutinaEntity[] | null> {
        return [MOCK_RUTINA,MOCK_RUTINA,MOCK_RUTINA];
    }
    
}

export { MockRepository }