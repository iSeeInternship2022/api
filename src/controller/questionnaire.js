import questionnaire from "../src/model/questionnaire.js";
import { v4 as uuidv4 } from "uuid";

export const create = async (req, res) => {
  const data = new questionnaire({ _id: uuidv4(), ...req.body });

  try {
    const result = await data.save();
    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .send({
        message:
          error.message ||
          "Some error occurred while creating the questionnaire.",
      });
  }
};

export const findAll = async (req, res) => {
  try {
    const data = await questionnaire.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const data = await questionnaire.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const data = await questionnaire.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(`Questionnaire ${data._id} has been updated.`);
  } catch (error) {
    res.status(500).send({
      message: "Error updating questionnaire with id=" + req.params.id,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await questionnaire.findByIdAndRemove(req.params.id);
    res.send(`Questionnaire ${data._id} has been deleted.`);
  } catch (error) {
    res.status(500).json({
      message: "Could not delete Questionnaire with id=" + req.params.id,
    });
  }
};
