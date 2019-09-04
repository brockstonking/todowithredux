const express = require('express');
const router = express.Router();
const authController = require('./../controllers/auth');

router.post('/api/add_user', authController.registerUser);
router.post('/api/login_user', authController.login);
router.get('/api/get_session', authController.getSession);
router.get('/api/get_people_and_groups/:user_id', authController.getPeopleAndGroups);
router.get('/api/get_person_pages/:person_id', authController.getPersonPages);
router.get('/api/get_page_todos/:page_id', authController.getPageTodos);
router.post('/api/add_person_group', authController.addPersonGroup);

module.exports = router;