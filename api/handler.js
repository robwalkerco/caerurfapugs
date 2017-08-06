const AWS = require('aws-sdk')
const ses = new AWS.SES()

const sendEmail = (data, done) =>
  ses.sendEmail(
    {
      Destination: {
        ToAddresses: [
          process.env.EMAIL,
        ],
      },
      Message: {
        Body: {
          Text: {
            Data: data.message,
            Charset: 'UTF-8',
          },
        },
        Subject: {
          Data: data.subject,
          Charset: 'UTF-8',
        },
      },
      Source: process.env.EMAIL,
    },
    done
  )


module.exports.mailinglist = (event, context, callback) => {
  const body = JSON.parse(event.body)

  sendEmail(
    {
      subject: 'New email for email list',
      message: `${body.name} would like to add their email address to the mailing list.\n\nTheir email address is - ${body.email}`
    },
    error =>
      callback(
        null,
        {
          statusCode: error ? 500 : 200,
          body: JSON.stringify({})
        }
      )
  )
}

module.exports.enquiry = (event, context, callback) => {
  const body = JSON.parse(event.body)

  sendEmail(
    {
      subject: 'Email enquiry',
      message: `Name: ${body.name}\n\nEmail: ${body.name}\n\nMessage: ${body.message}`
    },
    error =>
      callback(
        null,
        {
          statusCode: error ? 500 : 200,
          body: '',
        }
      )
  )
}
