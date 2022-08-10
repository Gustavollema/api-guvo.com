const mongoose = require('mongoose');



const validId = (req, res, next) => {
    const idParam = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'Id inválido!' });
      }
      next();

}

const validObjectBody = (req, res, next) => {
    const presente = req.body;

  if (
    !presente ||
    !presente.produto ||
    !presente.marca ||
    !presente.foto ||
    !presente.preco
  ) {
    return res.status(400).send({ message: 'Envie todas as informações' });
  }
  next();
}

module.exports = {
    validId,
    validObjectBody,
}
