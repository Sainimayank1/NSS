import nodemailer from "nodemailer"

const sendMail = async (data) =>
{
    let email = data.email;
    let url = data.url;
    console.log("yes1");
    try {
        console.log("yes1");
        let transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
              user: process.env.emailUser,      // Sender email
              pass: process.env.emailPassword,  // Sender password
            },
          });
          console.log("yes1");
        
          let detail = {
            from: '"NSS Jmieti" <nssjmieti@gmail.com>', // sender address
            to: "mayanksaini4455@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: '<b></b>', // html body
          }
          console.log("yes2");

          let info = await transporter.sendMail(detail);
          console.log("yes3");
          if(info)
          {
            // return 1;
          }
          console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.log(error)
        // return 0;
    }
}

export default sendMail;