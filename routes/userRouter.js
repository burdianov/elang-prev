const router = require('express').Router();

const {
  register,
  activateEmail,
  login,
  getAccessToken,
  forgotPassword,
  resetPassword,
  getUserInfo,
  getAllUsersInfo,
  logout,
  updateUser,
  updateUsersRole,
  deleteUser,
  googleLogin,
  facebookLogin
} = require('../controllers/userController');

const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router.post('/register', register);
router.post('/activation', activateEmail);
router.post('/login', login);
router.post('/refresh-token', getAccessToken);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', auth, resetPassword);
router.get('/logout', logout);
router.patch('/update', auth, updateUser);
router.patch('/update-role/:id', auth, authAdmin, updateUsersRole);
router.delete('/delete/:id', auth, authAdmin, deleteUser);

router.get('/info', auth, getUserInfo);
router.get('/all-info', auth, authAdmin, getAllUsersInfo);

router.post('/google-login', googleLogin);
router.post('/facebook-login', facebookLogin);

module.exports = router;
