const crypto = require('crypto');

const Project = require('../model/projectModel')

const createProjectCtrl = async (req, res) => {
    const { title, image, desc, role, repo } = req.body
    const project_id = crypto.randomUUID()
    const createdAt = new Date().toISOString();

    const newProject = {
        project_id: project_id,
        title: title,
        image: image,
        desc: desc,
        role: role,
        repo: repo,
        createdAt: createdAt
    }

    try {
        const project = new Project(newProject)
        await project.save();
        return res.status(200).json ({
            error: false,
            message: "project list telah dibuat",
            project: newProject
        })
    } catch(e) {
        return res.status(500).json({
            error: true,
            message: 'Gagal membuat project list: ' + e.message,
        });
    }
}

const getAllProjectsCtrl = async (req, res) => {
    try {
        const projects = await Project.find({});

        return res.status(200).json({
            message: 'Semua journal berhasil ditampilkan!',
            projects: projects
        });
    } catch (e) {
        return res.status(500).json({
            message: e.message,
        });
    }
}

module.exports = { createProjectCtrl, getAllProjectsCtrl }