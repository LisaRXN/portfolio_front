// import Mailjet from "node-mailjet";
import * as mailjet from 'node-mailjet';
// import { someExport } from 'node-mailjet';


export function sendMail( firstname, lastname, email, text) {
  const MJ_APIKEY_PUBLIC = "7dfc1c850b0de622aed45acb3ceda813";

  const MJ_APIKEY_PRIVATE = "9baffbe600caa20f104d9e4e1aedd5bb";

  const mailjet = Mailjet.apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: email,
          Name: `${firstname} ${lastname}`,
        },
        To: [
          {
            Email: "lisa.eriksen@epitech.eu",
            Name: "Lisa Eriksen",
          },
        ],
        Subject: "Email confirmation",
        TextPart: "Email confirmation",
        HTMLPart: text,
      },
    ],
  });

  request
    .then((result) => {
      console.log("Email sent:", result.body);
    })
    .catch((err) => {
      console.error("Error sending email:", err.statusCode, err.message);
    });
}
