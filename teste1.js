var data = require("./fakeData");

const getUser = (req, res, next) => {
    var { name } = req.query;

    const user = data.find(user => user.name.includes(name));

    if (!user) {
        res.status(404).json({
            message: 'User not found.'
        })
    }

    res.send(user);
};

const getUsers = (req, res, next) => {
    const users = data;

    return res.json(users)
};

module.exports = {
    getUser,
    getUsers
};