const express = require('express')
const router = express.Router()

const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController.js')

const { protect } = require('../middleware/authMiddleware.js')

// app.get('/api/goals', (req, res) => {
//     res.status(200).send({ message: 'Get goals' })
// })

// router.get('/', (req, res) => {
//     res.status(200).send({ message: 'Get goals' })
// })

// router.post('/', (req, res) => {
//     res.status(200).json({ message: 'Set goal' })
// })

// router.put('/:id', (req, res) => {
//     res.status(200).json({ message: `Update goal ${req.params.id}` })
// })

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ message: `Delete goal ${req.params.id}` })
// })

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)

router.route('/').get(protect, getGoals).post(protect,setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)


module.exports = router