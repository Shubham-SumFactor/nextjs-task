import { NextApiRequest, NextApiResponse, } from 'next';
import * as jwt from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET_KEY as string
const refreshToken: string = process.env.REFRESH_ACCESS_KEY as string

interface JwtToken {
    email: string,
    password: string
}

export const generateAccessToken = (user: JwtToken) => {
    console.log({ user })
    return jwt.sign(user, secret, { expiresIn: '2m' })
}

interface refreshJwtToken {
    user: object
}

export const refreshAccessToken = (tokenUser: refreshJwtToken) => {
    console.log(tokenUser);
    return jwt.sign(tokenUser.user, refreshToken)
}

