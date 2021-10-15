const Admin = require('../../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.creteAdmin = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash("password", Number(process.env.SALT));
    const superAdmin = await Admin.create({
      email: "admin@admin.com",
      password: hashedPassword,
    });
    return res.status(200).json(superAdmin)
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}


exports.signin = async (req, res) => {
  try {
    const user = await Admin.findOne({ email: req.body.email });
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const token = jwt.sign({
          _id: user?._id,
          email: user?.email
        }, process.env.JWT_KEY, { expiresIn: '1d' });
        res.status(200).json({ token: token })
      } else {
        res.status(400).json({ message: "invalid password" });
      }
    } else {
      return res.status(400).json({ message: "invalid email" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}