const express = require("express");
const router = express.Router();

const { Obtenir_Toute_Les_Production_de_Déchets, Obtenir_Une_Production_De_Déchet, Supprimer_La_Production_De_Déchet } = require("../controllers/User");

router.get("/all", Obtenir_Toute_Les_Production_de_Déchets);
router.get("/byId/:id", Obtenir_Une_Production_De_Déchet);
router.delete("/:id",  Supprimer_La_Production_De_Déchet,);

module.exports = router;