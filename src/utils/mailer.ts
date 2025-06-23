import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import nodemailer from "nodemailer";

export const sendEmail = async ({
  email,
  emailtype,
  userId,
}: {
  email: string;
  emailtype: string;
  userId: string;
}) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailtype === "VERIFY") {
      const updateUser = await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 360000,
        },
      });

      console.log("Upadteuser", updateUser);
    }  else if (emailtype === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set:{
           forgetPasswordToken: hashedToken,
        forgetPasswordTokenExpiry: Date.now() + 360000,
        }
       
      });
    }
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      //Move to env file
      auth: {
        user: "8576c00c36f1f1",
        pass: "2e4a19f1fe5259",
      },
    });

    const mailOptions = {
      from: "aashis123@gmail.com",
      to: email,
      subject:
        emailtype === "VERIFY" ? "Verify your email" : "Reset your passsowrd",

      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">Here</a> to ${
        emailtype === "VERIFY" ? "Verify your email" : "reset your password"
      } or copy and paste the link below in your browswe. <br>${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}</p>`, // HTML body
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
