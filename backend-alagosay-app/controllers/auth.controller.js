import Users from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const { username, password } = req.body

    Users.findByUsername(username, async (err, user) => {
        if (err) {
            if (err.type === 'not_found') {
                return res.status(404).send({
                    message: `User Not registered`
                })
                
                // throw new Error('User_Not_Registered')
            } else {
                res.status(500).send({msg: "Exist Some Error"})
            }
        }

        const userPassword = user.password
        const isValidPassword = await bcrypt.compare(password, userPassword)

        if (!isValidPassword) {
            return res.status(401).json({message: "Invalid Password"})
        }

        const token = jwt.sign({userId: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.json({token})
    })
}

export const register = async (req, res) => {
    const userExist = await new Promise((resolve, reject) => {
        Users.findByUsername(req.body.username, (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    resolve(false)
                } else {
                    reject(err)
                }
            } else {
                resolve(true)
            }
        })
    })

    if (userExist) {
        return res.status(400).json({message: 'Username Already Exist!'})
    }

    const encryptPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new Users({
        name: req.body.name,
        username: req.body.username,
        password: encryptPassword,
        no_telp: req.body.no_telp,
    })

    Users.create(newUser, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist Some Error"})
            return
        }

        res.send(data)
    })
}