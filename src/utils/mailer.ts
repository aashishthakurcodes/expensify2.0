import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailtype, userId }: { email: string; emailtype: string; userId: string }) => {
    
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, 
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

const mailOptions = {
      from: 'aashis123@gmail.com',  
      to: email,
      subject:emailtype === 'VERIFY'? "Verify ypur email" :"Reset your passsowrd",
     
      html: "<b>Hello world?</b>", // HTML body
    };

  const mailResponse=  await transporter.sendMail(mailOptions);
  return mailResponse

  } catch (error) {
    console.error("Error sending email:", error);
  }


};