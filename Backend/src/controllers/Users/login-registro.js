const model = require('../../models/Usuario');
const { Encrypt, Compare } = require('../../middlewares/Bcrypt');
const { GenerarToken } = require('../../middlewares/JWT');

const registro = async (req, res) => {
  console.log(req.body);
  let rol = "";
  if (req.body.Rol == "Admin") {
    rol = "Admin";
  } else {
    rol = "User";
  }
  try {
    const { Name, Lastname, Email, Password, Username, Gender } =
      req.body;
    if (
      !Name ||
      !Email ||
      !Password ||
      !Lastname ||
      !Username ||
      !Gender
    ) {
      return res.status(400).json({ message: "Faltan datos", status: 400 });
    }

    const hash = await Encrypt(Password);

    const user = {
      Name,
      Lastname,
      Email,
      Password: hash,
      Rol,
      Username,
      Gender,
    };
    const data = new model(user);

    try {
      //Se procede a guardar
      await data.save();
      //En tal caso todo haya salido bien

      const datas = async (dato) => {
        const documents = await model.find({ username: Username });
        return documents;
      };

      const getdata = await datas(Username);

      const payload = {
        userId: getdata[0]._id,
        Username,
        Email,
        Rol,
      };
      const token = GenerarToken(payload);

      if (!data) {
        return res
          .status(404)
          .json({ message: "Usuario o contraseña incorrectos", status: 404 });
      }

      res
        .status(200)
        .json({ payload, message: "Registro Exitoso", token, status: 200 });
    } catch (error) {
      //Caso contrario
      console.log("Error", error);
      res.status(500).json({ message: "Error al registrarse", status: 500 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { Username, Password } = req.body;
    if (!Username || !Password) {
      return res.status(400).json({ message: "Faltan datos", status: 400 });
    }

    const datas = async (dato) => {
      const documents = await model.find({ Username: dato });
      return documents;
    };

    const data = await datas(Username);

    if (!data) {
      return res
        .status(404)
        .json({ message: "Usuario o contraseña incorrectos", status: 404 });
    }

    const user = {Username, Password };

    const match = await Compare(user.Password, data[0].Password);
    if (!match) {
      return res
        .status(401)
        .json({ message: "Contraseña o Usuario incorrecto", status: 401 });
    }
    const payload = {
      userId: data[0]._id,
      Username: data[0].Username,
      Email: data[0].Email,
      Rol: data[0].Rol,
    };
    const token = await GenerarToken(payload);

    res.status(200).json({
      token,
      payload,
      message: "Inicio de Sección Exitoso",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Contraseña o Usuario incorrecto",
      message1: error.message,
      status: 500,
    });
  }
};

module.exports = {registro, login };