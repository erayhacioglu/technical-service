const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); 
const mongoose = require('mongoose');
const User = require('../models/User');
const { body, validationResult } = require('express-validator'); 
const bcrypt = require('bcryptjs');

// @route   POST /api/profile/update
// @desc    Update profile information (ADD TECHNICIAN)
// @access  Private
router.post('/update', auth, async (req, res) => {
        
    try {
        let user = await User.findById(req.user.id);

        const { technician } = req.body;
        let newTechnician = {};
        newTechnician.name = technician;

        user.users.push(newTechnician);

        await user.save();

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error...');
    }
});

// @route   PUT /api/users/remove-technician
// @desc    remove technician
// @access  Private
router.put('/:techId', auth, async (req, res) => {
    try {
      let user = await User.findById(req.user.id);
      let technicians = user.users;
  
      const newTechnicians = technicians.filter(
        (tech) => tech.id !== req.params.techId
      );
  
      user.users = newTechnicians;
  
      await user.save();
  
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error...');
    }
  });

module.exports = router;