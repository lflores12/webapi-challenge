const express = require('express');

const Actions = require('../helpers/actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const actions = await Actions.get();
        res.status(200).json(actions);
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error retrieving actions"
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.get(req.params.id);
        res.status(200).json(action);
    } catch(error) {
        console.log(error);
        res.status(404).json({
            message: "Error retrieving action"
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const newAction = await Actions.insert(req.body);
        res.status(201).json(newAction)
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error adding action"
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedAction = await Actions.update(req.params.id, req.body);
        res.status(200).json(updatedAction);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error updating action"
        });
    }
});

module.exports = router;