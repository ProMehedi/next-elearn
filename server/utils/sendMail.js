import nodemailer from 'nodemailer'

const sendEmail = async (toEmail, randomCode) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'premium28.web-hosting.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'elearn@promehedi.com', // generated ethereal user
      pass: 'n)]#MaRPLb(+', // generated ethereal password
    },
    tls: { rejectUnauthorized: false },
  })

  // send mail with defined transport object
  await transporter.sendMail({
    from: '"ELEARN " <elearn@promehedi.com>', // sender address
    to: toEmail, // list of receivers
    subject: 'Use this code to verify your account ✔', // Subject line
    html: `<div style="background:#f9f9f9;padding:25px;text-align:center;">
            <h2 style="color:#0d6efd">E-LE@RN</h2>
            <div style="max-width:400px;margin:0 auto;padding:25px;background:#fff;box-shadow:0 0 6px rgba(0,0,0,0.05)">
              <h2>Verify Code</h2>
              <p>Please use this code to verify your account</p>
              <span style="display:inline-block;color:black;font-weight:700;padding:10px 15px;background:#a3ffd4">${randomCode}<span>
          </div>
        </div>`, // html body
  })
}

export default sendEmail
