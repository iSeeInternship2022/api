import mongoose from 'mongoose';

const validatorsSchema = new mongoose.Schema({
    min: Number,
    max: Number,
})

const responseSchema = new mongoose.Schema({
    val: String,
})


const questionSchema = new mongoose.Schema({
    id: {
        type:String,
        required: true
    },
    content: String,
    responseType: String,
    dimension: String,
    answer: [String],
    responseOptions: [responseSchema],
    required: Boolean,
    completed: Boolean,
    validators: validatorsSchema
})

const questionnaireschema = new mongoose.Schema({
    _id: {
        type:String,
        required: true
    },
    name: String,
    dimension: String,
    questions: [questionSchema],
})

const questionnaire = mongoose.model('questionnaires', questionnaireschema);

export default questionnaire;