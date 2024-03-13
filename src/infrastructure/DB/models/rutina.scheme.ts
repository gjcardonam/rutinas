import { Schema, model } from "mongoose";

const ImagenScheme = new Schema({
    url: { type: String, required: true },
    description: { type: String, required: true },
});

const VideoScheme = new Schema({
    difficultyLevel: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },    
});

const RecomendacionScheme = new Schema({
    difficultyLevel: { type: String, required: true },
    sets: { type: Number, required: true },
    repetitions: { type: Number, required: true },
    weight: { type: Number, required: true },
});

const EjercicioScheme = new Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    muscleGroup: { type: Array, required: true },
    requiredEquipment: { type: Array, required: true },
    isRecommended: { type: Boolean, required: true },
    images: { type: [ImagenScheme], required: true },
    videos: { type: [VideoScheme], required: true },
    recommendations: { type: [RecomendacionScheme], required: true },
});

const DiaScheme = new Schema({
    dia: { type: String, required: true },
    duracion: { type: Number, required: true },
    ejercicios: { type: [EjercicioScheme], required: true },
});

const RutinaSchema = new Schema({
    user: { type: String, required: true },
    dia: { type: String, required: true },
    ejercicios: { type: [EjercicioScheme], required: true },
    duracion: { type: Number, required: true },
    muscleGroup: { type: Array, required: true },
    
});

const RutinaModel = model('Rutina', RutinaSchema);

export { RutinaModel };