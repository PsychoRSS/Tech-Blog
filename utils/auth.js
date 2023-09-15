const withAuth = (req, res, next) => {
  if (!req.session.loggIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
