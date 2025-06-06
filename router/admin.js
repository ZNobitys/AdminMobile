const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
  res.render('admin/home');
});
router.get('/', (req, res) => {
  res.render('admin/login/login');
});
//topcic
router.get('/topic', (req, res) => {
  res.render('admin/topic/topic');
});
//account
router.get('/user', (req, res) => {
  res.render('admin/account/account');
});
//skill
router.get('/skill', (req, res) => {
  res.render('admin/skill/skill');
});
//exam
router.get('/exam', (req, res) => {
  res.render('admin/exam/exam');
});
//detail
router.get('/detail-question', (req, res) => {
  res.render('admin/question/details-question');
});
//add-question
router.get('/add-question', (req, res) => {
  res.render('admin/question/add-question');
});
//detail-practice
router.get('/detail-practice', (req, res) => {
  res.render('admin/practice/details-practice');
});
//add-practice
router.get('/add-practice', (req, res) => {
  res.render('admin/practice/add-practice');
});

//detail-topic
router.get('/details-topic', (req, res) => {
  res.render('admin/topic/details-topic');
});

//detail-exam
router.get('/detail-exam', (req, res) => {
  res.render('admin/exam/details-exam');
});
module.exports = router;
