var data =  require("./fakeData");

module.exports =  function(req, res) {
    const { id } =  req.query;
    const { name, job } = req.body;

    if (!id) {
        return res.status(400).json({
            message: 'Please provide an id.'
        });
    }

    if (!name, !job) {
        return res.status(400).json({
            message: 'Please provide name or job.'
        });
    }

    var user = data.find(data => data.id === Number(id));

    if (!user) {
        return res.status(404).json({
            message: 'User not found.'
        });
    }

    user.name = name;
    user.job = job;

    return res.status(200).send(user);
};