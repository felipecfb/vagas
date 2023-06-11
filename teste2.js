const data = require('./fakeData');

module.exports = function(req, res){
    var { name, job } = req.body;

    if (!name || !job) {
        return res.status(400).json({
            message: 'Please provide name and job.'
        });
    }

    const user = data.find(user => user.name === name);

    if (user) {
        return res.status(409).json({
            message: 'User already exists.'
        });
    }

    var newUser = {
        id: data.length + 1,
        name,
        job
    };

    data.push(newUser);

    return res.send(newUser);
};
