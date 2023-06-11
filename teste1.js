var data = require("./fakeData");

const getUser = (req, res, next) => {
    var name = req.query.name;

    const user = data.find(user => user.name.includes(name));

    if (!user) {
        res.status(404).json({
            message: 'User not found.'
        })
    }

    res.send(user);
};

const getUsers = (req, res, next) => {

    res.send(data);

};

module.exports = {
    getUser,
    getUsers
};