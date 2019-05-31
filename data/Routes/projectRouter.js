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

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);
        res.status(200).json(project);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving that project"
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

router.put('/:id', async (req, res) =>{
    try {
        const updatedproject = await Projects.update(req.params.id, req.body);
        res.status(200).json({updatedproject});
    } catch(error) {
        console.log(error);
        res.status(200).json({
            message: "Error updating project"
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Projects.remove(req.params.id);
        if(deleted > 0){
        res.status(200).json({ 
            message: "Succesfully deleted project"
        })
    } else {
        res.status(404).json({
            message: "There are no projects to delete"
        });
    }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error deleteing project"
        });
    }
});

router.get('/:id/actions', async (req, res) => {
    try {
    const actions = await Projects.getProjectActions(req.params.id)
    res.status(200).json(actions);
    } catch (error){
        console.log(error);
        res.status(500).json({
            message: "Error retrieving actions"
        });
    }
});



module.exports = router;