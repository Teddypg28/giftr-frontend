import nodemailer from 'nodemailer'
import fs from 'fs'
import Handlebars from 'handlebars'

const sendEmail = (name, email, productsObject) => {

    const businessEmail = 'teddypg02@gmail.com'

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: businessEmail,
            pass: 'hrvsexflzcjrcvsz',
        }
    })

    fs.readFile('/Users/teddypapageorge/giftr/server/EmailTemplate.html', 'utf-8', (err, html) => {
        if (err) {
            return console.log(err)
        }
            const emailTemplate = Handlebars.compile(html)
            const emailData = {
                "name": name,
                "productData": []
            }

            for (let i = 1; i<Object.keys(productsObject).length + 1; i++) {
                emailData["productData"].push({'name': productsObject[i].productName, 'link': `http://www.amazon.com/dp/${productsObject[i].productInfo.asin}/ref=nosim?tag=giftr05c-20`})
            }

            const filledOutEmail = emailTemplate(emailData) 

            const mailOptions = {
                from: 'Your Gift Idea List',
                to: email,
                subject: `Here's Your Saved Gift Idea List, ${name}`,
                html: filledOutEmail
            }

            transport.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Email Sent!', info.response)
                }
            })
    })
}

export default sendEmail