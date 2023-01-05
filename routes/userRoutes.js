const express = require('express');
const router = express.Router(); 
const handleNewUser = require('../controllers/userRegisterController'); 
const loginUser = require('../controllers/userLoginController'); 
const activities = require('../controllers/activitiesController'); 
const UserActivities = require('../controllers/userActivities'); 
const UserNewActivity = require('../controllers/userNewActivityController'); 
const UserActivitiesCount = require('../controllers/userActivitiesCountController'); 
const CompleteUserActivity = require('../controllers/completed'); 
const NotCompleteUserActivity = require('../controllers/notCompleted')
const EditUserActivity = require('../controllers/edit'); 
const DeleteUserActivity = require('../controllers/deleteActivity'); 
const FetchUserActivity = require('../controllers/fetchActivity'); 





router.post('/register', handleNewUser);
router.post('/home', handleNewUser);
router.post('/login', loginUser);
router.get('/activities', activities);
router.post('/user-activities', UserActivities);
router.post('/new-activity', UserNewActivity);
router.post('/activities-count', UserActivitiesCount);
router.post('/activity-edit', EditUserActivity);
router.post('/activity-complete', CompleteUserActivity);
router.post('/activity-not-complete', NotCompleteUserActivity);
router.post('/activity-delete', DeleteUserActivity);
router.post('/fetch-activity', FetchUserActivity);



module.exports = router;