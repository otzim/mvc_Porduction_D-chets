const {
    Obtenir_Toute_Les_Production_de_DéchetsOfUsers,
    Obtenir_Une_Production_De_DéchetById,
    Supprimer_La_Production_De_DéchetById,
} = require("../service/UserTable");

const Obtenir_Toute_Les_Production_de_Déchets = (req, res) => {
    const userList =  Obtenir_Toute_Les_Production_de_DéchetsOfUsers();

    return res.json(userList);
};

const  Obtenir_Une_Production_De_Déchet = (req, res) => {
    const userId = req.params.id;
    const user = Obtenir_Une_Production_De_DéchetById(userId);

    return res.json(user);
};

const Supprimer_La_Production_De_Déchet = (req, res) => {
    const userId = req.params.id;
    const user = Supprimer_La_Production_De_DéchetById(userId);

    return res.json(user);
};

module.exports = {
    Obtenir_Toute_Les_Production_de_Déchets,
    Obtenir_Une_Production_De_Déchet,
    Supprimer_La_Production_De_Déchet,
};