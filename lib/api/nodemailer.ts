const { MailtrapClient } = require('mailtrap');

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;


const sender = {
    email: 'noreply@till-hoffmann.me',
    name: 'Till Hoffmann - Contact Form',
};

export const sendMail = async (recipient: string, subject: string, message: string, html: string) => {
    const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });
    const recipients = [{ email: recipient }];
    return await client
        .send({
            from: sender,
            to: recipients,
            headers: {
                replyTo: 'hoffmann.webdev@gmail.com',
            },
            subject: subject,
            text: message,
            category: 'contact',
            html: html,
        });
};