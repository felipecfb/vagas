const data = require('./fakeData');

function checkUserRole(req, res, next) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(401).json({ message: 'Missing user id.' });
  }

  console.log(data);

  const user = data.find((user) => user.id === Number(userId));

  console.log(user);

  if (user && user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. User must be an admin.' });
  }
}

module.exports = checkUserRole;
