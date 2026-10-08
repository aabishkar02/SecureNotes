import express from "express";

const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  // Add your registration logic here
    res.status(201).json({ message: "User registered successfully" });
});

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Add your login logic here
  res.status(200).json({ message: "User logged in successfully" });
}

);

authRouter.post("/logout", (req, res) => {
  // Add your logout logic here
  res.status(200).json({ message: "User logged out successfully" });
} 
);





export default authRouter;
