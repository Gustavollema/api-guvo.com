const presentesService = require('../services/presentes.services');
const mongoose = require('mongoose');

const findPresentesController = async (req, res) => {
  const allPresentes = await presentesService.findPresentesService();
  res.send(allPresentes);
};

const findPresenteControllerById = async (req, res) => {
  const idParam = req.params.id;


  const chosenPresente = await presentesService.findPresenteServiceById(idParam);

  if (!chosenPresente) {
    return res.status(404).send({ message: 'Presente não encontrado :(' });
  }

  res.send(chosenPresente);
};

const createPresenteController = async (req, res) => {
  const presente = req.body;
  const novoPresente = await presentesService.createPresenteService(presente);
  res.status(201).send(novoPresente);
};

const updatePresenteController = async (req, res) => {
  const idParam = req.params.id;
  const presenteEdit = req.body;
  const updatedPresente = await presentesService.updatePresenteService(
    idParam,
    presenteEdit,
  );
  res.send(updatedPresente);
};

const deletePresenteController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPresente = await presentesService.findPresenteServiceById(idParam);
  if (!chosenPresente) {
    return res.status(404).send({ message: 'Presente não encontrado!' });
  }
  await presentesService.deletePresenteService(idParam);
  res.send({ message: 'Presente deletado com sucesso!' });
};

module.exports = {
  findPresentesController,
  findPresenteControllerById,
  createPresenteController,
  updatePresenteController,
  deletePresenteController,
};
