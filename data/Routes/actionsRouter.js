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


module.exports = router;