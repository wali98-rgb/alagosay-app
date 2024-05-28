import jwt from 'jsonwebtoken'
import roleAccess from './roleAccess.js'

const authJwt = (req, res, next) => {
    // Get token
    const token = req.headers["authorization"]
    if (!token) {
        // return res.status(401).send({message: "Missing access token"})
        throw new Error('Missing_Token')
    }

    // Verify (Memastikan token valid)
    jwt.verify(
        token.replace("Bearer ", ""),
        process.env.JWT_SECRET,
        (err, decoded) => {
            if (err) {
                return res.status(403).json({ success: false, message: "Invalid token" })
            }

            req.userId = decoded.userId // Authentication
            req.userRole = decoded.role
            // console.log(decoded.role)
            if (!roleAccess(req.userRole, req.baseUrl)) {
                return res.status(403).json({ message: "Unauthorized access" })
            }

            next()
        })
}

export default authJwt