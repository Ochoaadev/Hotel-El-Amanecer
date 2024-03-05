const transporter = require('../config/mailer.config');

const enviarMail = (reserva) => {
  console.log("Enviando correo...")
  const cuerpo = `
    <h2>Confirmación de Reserva de Habitación de Hotel</h2>
    <p>Estimado/a ${reserva.Nombre_Apellido},</p>
    
    <p>Nos complace informarle que su reserva para la habitación de hotel ha sido confirmada con éxito. A continuación, se detallan los detalles de la reserva:</p>
    
    <ul>
        <li><strong>Nombre del Cliente:</strong> ${reserva.Nombre_Apellido}</li>
        <li><strong>Fecha de Check-in:</strong> ${reserva.Fecha_llegada}</li>
        <li><strong>Fecha de Check-out:</strong> ${reserva.Fecha_Salida}</li>
        <li><strong>Número de Personas:</strong> ${reserva.Cantidad_Persona}</li>
    </ul>
    
    <p>Le agradecemos por elegir nuestro hotel y esperamos que disfrute de su estancia con nosotros. Si tiene alguna pregunta o necesita asistencia adicional, no dude en ponerse en contacto con nuestro equipo.</p>
    
    <p>¡Esperamos darle la bienvenida pronto!</p>
    
    <p>Atentamente,<br>
    Hotel El Amanecer</p>
`;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: reserva.Email,
    subject: "RESERVACION - EL AMANECER",
    html: cuerpo
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
      return err
    } 
  });
}

module.exports = enviarMail;