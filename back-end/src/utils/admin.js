const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    console.log('yes. you are admin');
    next();
  } else {
    console.log('no. you are not admin');
    res.status(401).json({
      message: 'fault',
      text: 'Wrong admin token!'
    });
  }
};

export default isAdmin;
