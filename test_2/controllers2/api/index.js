const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll
});

router.get('/signup', async (req, res) => {

})  

router.get('/login', async (req, res) => {
    try {
        
    }
}) 