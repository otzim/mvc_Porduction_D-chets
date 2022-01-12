const { Data_déchets } = require("../models/DataDéchets");

const  Obtenir_Toute_Les_Production_de_DéchetsById = (id) => {
  let user;
  Data_déchets.forEach((userData) => {
    if (userData.id === Number(id)) {
      user = userData;
    }
  });
  return user;
};

const Obtenir_Une_Production_De_DéchetOfUsers = () => {
  return Data_déchets;
};

const  Supprimer_La_Production_De_DéchetById = (id) => {
 Data_déchets.filter((user) => {
    return user.id !== Number(id);
  });
};

module.exports = {
    Obtenir_Toute_Les_Production_de_DéchetsById,
    Obtenir_Une_Production_De_DéchetOfUsers,
    Supprimer_La_Production_De_DéchetById,
};