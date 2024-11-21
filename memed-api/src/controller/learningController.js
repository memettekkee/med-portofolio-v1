const crypto = require('crypto');

const Learning = require('../model/learningModel');

const createLearningCtrl = async (req, res) => {
    const { title, company, type, link } = req.body
    const learning_id = crypto.randomUUID()
    const createdAt = new Date().toISOString();

    const newLearning = {
        learning_id: learning_id,
        title: title,
        company: company,
        type: type,
        link: link,
        created: createdAt
    }

    try {
            const learning = new Learning(newLearning); // Buat instance model
            await learning.save(); // Simpan ke MongoDB
            return res.status(200).json ({
                error: false,
                message: "learning list telah dibuat",
                learning: newLearning
            })
    } catch(e) {
        return res.status(500).json({
            error: true,
            message: 'Gagal membuat learning list: ' + e.message,
        });
    }
}

const getAllLearningsCtrl = async (req, res) => {
    try {
        const learnings = await Learning.find({});

        return res.status(200).json({
            message: 'Semua journal berhasil ditampilkan!',
            learnings: learnings
        });
    } catch (e) {
        return res.status(500).json({
            message: e.message,
        });
    }
}

module.exports = { createLearningCtrl, getAllLearningsCtrl }