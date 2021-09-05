const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Getting questions...'
    });
});

router.post('/addQuestion', (req, res) => {
    const question = {
        qTitle: req.body.qTitle,
        qDesc: req.body.qDesc
    };
    res.status(200).json({
        message: 'Add new question...',
        newQuestion: question
    });
});

router.get('/:questionId', (req, res) => {
    const id = req.params.questionId;
    res.status(200).json({
        message: 'Passed an ID',
        id: id
    });
});

router.patch('/:questionId', (req, res) => {
    const id = req.params.questionId;
    res.status(200).json({
        message: 'Updated question!',
        id: id
    });
});

router.delete('/:questionId', (req, res) => {
    const id = req.params.questionId;
    res.status(200).json({
        message: 'Deleted question!',
        id: id
    });
});

module.exports = router;
