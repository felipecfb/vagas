const { userCount } = require("./teste1");

module.exports = function (req, res) {
    var { name } = req.query;

    const quantity = userCount[name] || 0;

    res.send(`Usuário ${name} foi lido ${quantity} vezes.`);
};