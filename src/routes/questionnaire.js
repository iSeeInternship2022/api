import express from "express";
import * as controller from "../../controller/questionnaire.js"

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.create);
router.delete('/:id', controller.remove);
router.patch('/:id', controller.update);

export default router;