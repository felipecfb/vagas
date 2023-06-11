var data =  require("./fakeData");

module.exports = function(req, res) {
    var { name } =  req.query;

    if (!name) {
        return res.status(400).json({
            message: 'Please provide name.'
        });
    }

    const user = data.find(user => user.name === name);

    if(!user) {
        return res.status(404).json({
            message: 'User not found.'
        });
    }

    data.map((user, index) => {
        if(user.name === name) {
            data.splice(index, 1);
        }
    })

    return res.status(200).send({
        message: 'User deleted successfully.'
    });
};