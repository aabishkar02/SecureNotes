const auth = (req, res, next) => {
    // Check if the user is authenticated
    const isAuthenticated = true; // Replace with your authentication logic 
    if (!isAuthenticated) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};