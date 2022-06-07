import mongoose from 'mongoose';

const questionnaireschema = new mongoose.Schema({
    _id: String,
    name: String,
    dimension: String,
    questions: [{
        id: String,
        content: String,
        responseType: String,
        dimension: String,
        answer: [String],
        responseOptions: [{
            val: String,
        }],
        required: Boolean,
        completed: Boolean,
        validators: {
            min: Number,
            max: Number,
        }
    }],
})

const questionnaire = mongoose.model('questionnaires', questionnaireschema);

export default questionnaire;