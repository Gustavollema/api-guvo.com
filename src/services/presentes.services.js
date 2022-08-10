const Presentes = require('../models/presente');

const findPresentesService = async () => {
  const presentes = await Presentes.find();
  return presentes;
};

const findPresenteServiceById = async (idParam) => {
  const presente = await Presentes.findById(idParam);
  return presente;
};

const createPresenteService = async (novoPresente) => {
  const presenteCreated = await Presentes.create(novoPresente);
  return presenteCreated;
};

const updatePresenteService = async (idParam, presenteEdited) => {
  const presenteUpdated = await Presentes.findByIdAndUpdate(idParam, presenteEdited);
  return presenteUpdated;
};

const deletePresenteService = async (idParam) => {
  return await Presentes.findByIdAndDelete(idParam);
};

module.exports = {
  findPresentesService,
  findPresenteServiceById,
  createPresenteService,
  updatePresenteService,
  deletePresenteService,
};
