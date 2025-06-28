import nodemailer from 'nodemailer'

const USER = process.env.NODEMAILERFROM
const PASS = process.env.AUTH

export const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
        user: USER,
        pass: PASS
    }
})

export const mailOpts = {
    from: USER,
    to: 'admin@bivensblueprint.com'
}