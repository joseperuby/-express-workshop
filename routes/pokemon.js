const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

pokemon.get("/", async (req,res, next) => {
    const pkmn = await db.query("SELECT * FROM pokemon");

    return res.status(200).json(pkmn);
});

pokemon.get('/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;
    const pkmn = pk.filter((p) => {
        return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;
    });
    console.log(pk);

    (pkmn.length > 0) ? res.status(202).send(pkmn) : res.status(404).send("Pokemon no encontrado");
});



pokemon.get('/:id(\\d{1,3})', (req, res, next) => {
    const id = req.params.id;
    if(id >= 0 && id <= 150){
        return res.status(200).send(pk[req.params.id - 1]);
    }
    else{
        return res.status(404).send("Pokemon no encontrado");
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

pokemon.post("/", (req, res, next) => {
    return  res.status(200).send(req.body);
});

module.exports = pokemon;