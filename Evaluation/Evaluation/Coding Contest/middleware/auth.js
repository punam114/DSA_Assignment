const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header("Authorization")?.split(" ")[1]; // Bearer <token>
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, "SECRET_KEY");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = auth;
