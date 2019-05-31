const express = require('express');

const Projects = require('../helpers/projectModel.js');
const Actions = require('../helpers/actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving projects"
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProject = await Projects.insert(req.body);
        res.status(201).json(newProject);
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error posting project"
        });
    }
});

module.exports = router;