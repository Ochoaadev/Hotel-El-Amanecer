var express = require('express');
var router = express.Router();

//                                                      <----Controladores---->

const { AggReservas } = require("../controllers/ControllersReserva");

const {registro, login} = require('../controllers/Users/login-registro');

const {AggHabit,ActualizarHabit, ListarHabit, EliminarHabit} = require('../controllers/ControllersHabit')

const {Obten_User, Eliminar_User, Edit_User, ActPassword, Listar_Users} = require('../controllers/ControllersUser')

//                                                          <----Rutas---->
const {crearReseña, obtenerReseñas, eliminarReseña} = require('../controllers/ControllersReview') 

//Reseñas
router.get('/Reviews', obtenerReseñas);

router.post("/Add_Reviews", crearReseña);

router.delete('/Reviews/:id', eliminarReseña);

//Reservas
router.post("/Add_Reservas", AggReservas);

//Habitaciones
router.get("/habitaciones", ListarHabit);

router.post("/AggHabit", AggHabit);

router.put("/habitaciones/:id", ActualizarHabit);

router.delete("/habitaciones/:id", EliminarHabit);

//Registro y logeo
router.post("/registro", registro);

router.post("/login", login);

//Usuarios

router.get("/Usuarios", Listar_Users);

router.get("/Usuario/:id/get", Obten_User);

router.delete('/Usuario/:id', Eliminar_User);

router.put('/Usuario/:id/edit', Edit_User);

router.put('/Usuario/:id/Password', ActPassword);

module.exports = router;
