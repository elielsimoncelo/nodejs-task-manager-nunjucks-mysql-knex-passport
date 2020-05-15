const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const Tasks = () => require('../database/db')('tasks');

router.get('/', authorize.isAuth, (req, res, next) => {
  Tasks().then((tasks) => {
    res.render('index', {
      tasks: tasks,
      isAuth: req.isAuthenticated(),
      user: req.user
    });
  }, next);
});

router.get('/add', authorize.isAuth, (req, res, next) => {
  res.render('add', { 
    isAuth: req.isAuthenticated(),
    user: req.user
  });
});

router.post('/add', authorize.isAuth, (req, res, next) => {
  Tasks().insert(req.body).then((_) => {
    res.redirect('/');
  }, next);
});

router.get('/edit/:id', authorize.isAuth, (req, res, next) => {
  const { id } = req.params;

  Tasks().where('id', id).first().then((task) => {
    if (!task) {
      return res.send(400);
    }

    res.render('edit', {
      task: task,
      isAuth: req.isAuthenticated(),
      user: req.user
    });
  }, next);
});

router.put('/edit/:id', authorize.isAuth, (req, res, next) => {
  const { id } = req.params;
  Tasks().where('id', id).update(req.body).then((updated) => {
    if (updated === 0) {
      return res.send(400);
    }

    res.redirect('/');
  }, next)
});

router.delete('/delete/:id', authorize.isAuth, (req, res, next) => {
  const { id } = req.params;

  Tasks().where('id', id).delete().then((deleted) => {
    if (deleted === 0) {
      return res.send(400);
    }

    res.redirect('/');
  }, next);
});

module.exports = router;