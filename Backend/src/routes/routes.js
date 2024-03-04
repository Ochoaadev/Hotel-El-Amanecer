var express = require('express');
var router = express.Router();

//                                                      <----Controladores---->

const { AggReservas } = require("../controllers/ControllersReserva");

//                                                          <----Rutas---->

router.post("/Add_Reservas", AggReservas);

module.exports = router;