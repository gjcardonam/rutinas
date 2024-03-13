import { IRutinaRepository } from "../../domain/repositories/IRutina.repository";
import { RutinaEntity } from "../../domain/entities/Rutina.entity";

export class RutinaUseCases {
    constructor(private rutinaRepository: IRutinaRepository) {}

    public getRutina = async (id: string) => {
        const rutina = await this.rutinaRepository.getById(id);
        return rutina;
    }

    public createRutina = async (rutinaData: Partial<RutinaEntity>) => {
        const rutina = new RutinaEntity(rutinaData);
        const createdRutina = await this.rutinaRepository.save(rutina);
        return createdRutina;
    }

    public deleteRutina = async (id: string) => {
        const deletedRutina = await this.rutinaRepository.delete(id);
        return deletedRutina;
    }

    public updateRutina = async (id:string, rutinaData: Partial<RutinaEntity>) => {
        const rutina = new RutinaEntity(rutinaData);
        const updatedRutina = await this.rutinaRepository.update(id, rutina);
        return updatedRutina;
    }

    public getRutinasByCreator = async (creator: string) => {
        const rutinas = await this.rutinaRepository.filterByCreator(creator);
        return rutinas;
    }

    public getAllRutinas = async () => {
        const rutinas = await this.rutinaRepository.getAll();
        return rutinas;
    }

    public getDaylyRoutineSummary = async () => {
        const rutinas = await this.rutinaRepository.daylyRoutineSummary();
        return rutinas;
    }
}