import { Request, Response } from "express";
import { RutinaUseCases } from "../../../application/uses_cases/RutinaUseCases";
import {
  rutinaValidator,
  idRutinaValidator,
} from "../../../interfaces/validators/rutina.validator";

export class RutinaController {
  constructor(private rutinaUseCase: RutinaUseCases) {}

  public createRutina = async (req: Request, res: Response) => {
    try {
      const rutina = await rutinaValidator.validateAsync(req.body);
      const rutinaCreated = await this.rutinaUseCase.createRutina(rutina);
      res.status(201).json(rutinaCreated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public getRutina = async (req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
      const idValid = await idRutinaValidator.validateAsync({_id: uuid});
      const rutina = await this.rutinaUseCase.getRutina(idValid);
      res.status(200).json(rutina);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public getAllRutinas = async (_req: Request, res: Response) => {
    try {
      const rutinas = await this.rutinaUseCase.getAllRutinas();
      res.status(200).json(rutinas);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public updateRutina = async (req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
      const idValid = await idRutinaValidator.validateAsync({_id: uuid});
      const rutina = await rutinaValidator.validateAsync(req.body);
      const rutinaUpdated = await this.rutinaUseCase.updateRutina(
        idValid,
        rutina
      );
      res.status(200).json(rutinaUpdated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public deleteRutina = async (req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
      const idValid = await idRutinaValidator.validateAsync({_id: uuid});
      const rutinaDeleted = await this.rutinaUseCase.deleteRutina(idValid);
      if (!rutinaDeleted) {
        return res.status(404).json({ message: "Exercise not found" });
      }
      res.status(200).json(rutinaDeleted);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

    public getRutinasByCreator = async (req: Request, res: Response) => {
        try {
        const creator = req.params.creator;
        const rutinas = await this.rutinaUseCase.getRutinasByCreator(creator);
        res.status(200).json(rutinas);
        } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred." });
        }
        }
    };

    public getDaylyRoutineSummary = async (_req: Request, res: Response) => {
        try {
        const rutinas = await this.rutinaUseCase.getDaylyRoutineSummary();
        res.status(200).json(rutinas);
        } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred." });
        }
        }
    };
}
