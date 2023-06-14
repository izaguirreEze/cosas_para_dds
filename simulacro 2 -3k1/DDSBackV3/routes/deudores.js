const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/deudores", async function (req, res) {
    let where = {};
    if (req.query.DeudorDescripcion != "" && req.query.DeudorDescripcion != undefined){
        where.DeudorDescripcion = {
            [Op.like]: '%' + req.query.DeudorDescripcion + '%',
        }
    }
    console.log(where)
    let deudores = await db.deudores.findAndCountAll({
        attributes: [
            "IdDeudor",
            "DeudorDescripcion",
            "MontoAdeudado",
          ],
          order: [["DeudorDescripcion", "ASC"]],
          where,
    })

  res.json(deudores.rows);
});

module.exports = router;