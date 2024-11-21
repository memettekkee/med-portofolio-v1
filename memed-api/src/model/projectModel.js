const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    project_id: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    role: { type: String, required: true },
    repo: { type: String, required: true },
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project