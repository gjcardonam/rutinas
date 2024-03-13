import { Image } from '../value_objects/Image.value';
import { Video } from '../value_objects/Video.value';
import { Recommendation } from '../value_objects/Recommendation.value';
import { v4 as uuidv4 } from 'uuid';

export class ExerciseEntity {
  uuid: string;
  name: string;
  description: string;
  muscleGroup: string[];
  requiredEquipment: string[];
  isRecommended: boolean;
  images: Image[];
  videos: Video[];
  recommendations: Recommendation[];
  duration: number;

  constructor(data: Partial<ExerciseEntity>) {
    this.uuid = uuidv4();
    this.name = data.name!;
    this.description = data.description!;
    this.muscleGroup = data.muscleGroup!;
    this.requiredEquipment = data.requiredEquipment!;
    this.isRecommended = data.isRecommended !== undefined ? data.isRecommended : false;
    this.images = data.images || []; 
    this.videos = data.videos || []; 
    this.recommendations = data.recommendations || []; 
    this.duration = data.duration!;
  }

  // Methods to manipulate the entity, such as validations or specific domain behaviors
}
