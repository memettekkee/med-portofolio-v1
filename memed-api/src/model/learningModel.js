const mongoose = require('mongoose');

const LearningSchema = new mongoose.Schema({
    learning_id: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    type: { type: String, required: true },
    link: { type: String, required: true },
    created: { type: String, required: true },
});

const Learning = mongoose.model('Learning', LearningSchema);

module.exports = Learning;
