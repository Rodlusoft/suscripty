import { NextApiRequest, NextApiResponse } from "next"
import { signInWithEmail } from "../../../firebase/auth";
import TAuthOperation from "../../../interfaces/authOperation";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password, method } = req.body
    let authResponse: Promise<TAuthOperation>

    switch (method) {
      case "EMAIL":
        authResponse = signInWithEmail(email, password)
        break;
    
      default:
        break;
    }

    res.status(200).json({ data: authResponse })
  }
}
