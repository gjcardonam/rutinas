import { IRutinaRepository } from "../../../domain/repositories/IRutina.repository";
import { RutinaEntity } from "../../../domain/entities/Rutina.entity";
import { RutinaModel } from "../models/rutina.scheme";

export class MongoRepository implements IRutinaRepository {

    async save(rutinaIn: RutinaEntity): Promise<RutinaEntity> {
        const createdRutina = await RutinaModel.create(rutinaIn);
        return createdRutina.toObject();
    }

    async delete(id: string): Promise<boolean> {
        const deletedRutina = await RutinaModel.findByIdAndDelete(id);
        return deletedRutina ? true : false;
    }

    async getById(id: string): Promise<RutinaEntity | null> {
        const rutina = await RutinaModel.findById(id);
        return rutina as RutinaEntity | null;
    }

    async getAll(): Promise<RutinaEntity[] | null> {
        const rutinas = await RutinaModel.find();
        return rutinas.map(rutina => rutina.toObject());
    }

    async update(id:string, rutina: RutinaEntity): Promise<RutinaEntity | null> {
        const updatedRutina = await RutinaModel.findByIdAndUpdate(id, rutina, { new: true });
        return updatedRutina as RutinaEntity | null;
    }

    async filterByCreator(creator: string): Promise<RutinaEntity[] | null> {
        const rutinas = await RutinaModel.find({ creador: creator });
        return rutinas.map(rutina => rutina.toObject());
    }

    async daylyRoutineSummary(): Promise<RutinaEntity[] | null> {
        const rutinas = await RutinaModel.find({},{ "muscleGroup": 1, "dia": 1, "duracion": 1});
        return rutinas.map(rutina => rutina.toObject());
    }

}