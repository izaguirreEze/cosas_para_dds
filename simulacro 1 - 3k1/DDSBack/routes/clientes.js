const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/clientes", async function (req, res) {
    let where = {};
    if (req.query.ApellidoYNombre != "" && req.query.ApellidoYNombre != undefined){
        where.ApellidoYNombre = {
            [Op.like]: "%" + req.query.ApellidoYNombre + "%",
        }
    }
    
    let clientes = await db.clientes.findAndCountAll({
        attributes: [
          "IdCliente",
          "ApellidoYNombre",
          "DNI",
        ],
        order: [["ApellidoYNombre", "ASC"]],
        where,
    });

    res.json(clientes.rows);
});

module.exports = router;
 