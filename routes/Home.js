require('../utils/passport');
const router = require("express").Router();


router.get('/', (req, res) => {
  res.status(200).json({
    'title': 'OAuth 2.0 passport login',
    'description': 'url used for testing passport',
    'login': 'http://localhost:5000/auth/google',
    'redirect_login': 'http://localhost:5000/auth/google/callback',
  })
})



module.exports = router;