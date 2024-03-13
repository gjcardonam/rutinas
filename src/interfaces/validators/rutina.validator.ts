import Joi from "joi";

const rutinaValidator = Joi.object({
    user: Joi.string().required(),
    dia: Joi.string().required(),
    ejercicios: Joi.array().items(Joi.object()).required(),
}).unknown(true);

const idRutinaValidator = Joi.object({
    _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/, "MongoDB ObjectId"),
  });

export { rutinaValidator, idRutinaValidator };