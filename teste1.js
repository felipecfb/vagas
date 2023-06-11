var data = require("./fakeData");

var userCount = {};

const getUser = (req, res, next) => {
    var { name } = req.query;

    if (!name) {
        return res.status(400).json({
            message: 'Please provide a name.'
        });
    }

    const user = data.find(user => user.name.includes(name));

    if (!user) {
        res.status(404).json({
            message: 'User not found.'
        })
    }

    if (!userCount[user.name]) {
        userCount[user.name] = 0;
    }

    userCount[user.name]++;

    return res.status(200).send(user);
};

const getUsers = (req, res, next) => {
    const users = data;

    return res.json(users)
};

module.exports = {
    getUser,
    getUsers,
    userCount
};