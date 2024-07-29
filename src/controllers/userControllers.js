import User from "../db/models/User.js";
import bcrypt from "bcryptjs";

const userControllers = {
  user: (req, res) => {
    res.send("user");
  },

  register: async (req, res) => {
    console.log(req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingEmail = await User.findOne({ where: { email: email } });

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    return res.status(200).json({ message: "Successfully!" });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser) {
      return res.status(400).json({ message: "Email doesn't exist!" });
    }

    const correctPassword = bcrypt.compareSync(password, existingUser.password);

    if (!correctPassword) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    const user = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    };

    return res.status(200).json(user);
  },
};

export default userControllers;
