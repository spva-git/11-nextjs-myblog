import { connectDB, insertDocument } from "./db-utill";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {email, name, message} = req.body;

    if (!email || !email.includes("@") || name === '') {
      res.status(422).json({ message: "Invalid input data" });
      return;
    }
    const client = await connectDB();
    await insertDocument(client, 'contacts', {email, name, message} );

    res.status(200).json({ email: email });
  }
}
