/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { signUpWithEmail } from "../../../firebase/auth";
import TAuthOperation from "../../../interfaces/authOperation";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password, username, image, method } = JSON.parse(req.body);
    let authResponse: TAuthOperation;
    switch (method) {
      case "EMAIL":
        console.table(JSON.parse(req.body))
        authResponse = await signUpWithEmail(email, password, username, image);
        res.status(200).json({ data: authResponse });
        break;

      default:
        break;
    }
  }
};
