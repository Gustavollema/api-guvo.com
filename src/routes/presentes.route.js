const express = require('express');
const router = express.Router();

const {
  validId,
  validObjectBody,
} = require('../middlewares/presente.middleware');

const presenteController = require('../controllers/presente.controllers');

router.get('/find-presentes', presenteController.findPresentesController);
router.get(
  '/find-presentes/:id',
  validId,
  presenteController.findPresenteControllerById,
);
router.post(
  '/create',
  validObjectBody,
  presenteController.createPresenteController,
);
router.put(
  '/update/:id',
  validId,
  validObjectBody,
  presenteController.updatePresenteController,
);
router.delete(
  '/delete/:id',
  validId,
  presenteController.deletePresenteController,
);

module.exports = router;
