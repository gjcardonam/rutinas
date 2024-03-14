import { Router } from 'express';
import { RutinaController } from '../controllers/rutina.controllers';
import { RutinaUseCases } from '../../../application/uses_cases/RutinaUseCases';
import { MongoRepository } from '../../DB/repository/Mongo.respository';
import { MockRepository } from '../../DB/repository/Mock.repository';
import { IRutinaRepository } from '../../../domain/repositories/IRutina.repository'; // Import the IRutinaRepository interface

const router = Router();

const repository: IRutinaRepository = process.env.MOCK === 'true' ? new MockRepository() : new MongoRepository();
const rutinaUseCases = new RutinaUseCases(repository);
const rutinaController = new RutinaController(rutinaUseCases);

router.get('/rutinas/creador', rutinaController.getRutinasByCreator)
router.get('/rutinas/diarias', rutinaController.getDaylyRoutineSummary);
router.get('/rutinas/:uuid', rutinaController.getRutina);
router.get('/rutinas/', rutinaController.getAllRutinas);
router.post('/rutinas/', rutinaController.createRutina);
router.put('/rutinas/:uuid', rutinaController.updateRutina);
router.delete('/rutinas/:uuid', rutinaController.deleteRutina);
router.get('/', (req, res) => { res.send('Hello World!') });


export { router };