const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('/addIncome', addIncome);
router.get('/getIncomes', getIncomes);
router.delete('/deleteincome/:id', deleteIncome)
module.exports = router;