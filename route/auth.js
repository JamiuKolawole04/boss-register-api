const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req, res) => {

    try {
        const { fullname, email, number, qualification, course, sex } = req.body;

        const newUser = new User({
            fullname: fullname,
            email: email,
            number: number,
            qualification, qualification,
            course: course,
            sex: sex,
        })
        if (!fullname || !email || !number || !qualification || !course) {
            return res.status(400).json({ msg: 'please fill up all the form' })
        }
        const savedUser = await newUser.save();
        res.status(201).json({ savedUser })

    } catch (err) {
        res.status(500).json({ err })

    }
})

module.exports = router;