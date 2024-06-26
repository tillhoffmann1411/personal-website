'use server';

import { z } from 'zod';

import Parser from 'rss-parser';
import { BlogPost, Contact, FormState } from '@/types/definitions';
import { sendMail } from '@/lib/api/nodemailer';

const upperCaseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const generateEmailContent = (data: Contact) => {
    const stringData = Object.entries(data).reduce((str, [key, value]) => {
        return str += `${upperCaseFirstLetter(key)}: \n${value}\n \n`;
    }, '');

    const htmlData = Object.entries(data).reduce((str, [key, value]) => {
        return str += `<h1 class="form-heading" align="left">${upperCaseFirstLetter(key)}</h1><p class="form-answer" align="left">${value}</p>`;
    }, '');
    return {
        text: stringData,
        html: `<!doctypehtml><title></title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="IE=edge"http-equiv=X-UA-Compatible><style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style><body style=margin:0!important;padding:0!important;background:#fff><div style=display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden></div><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class=section-padding style="padding:10px 15px 30px 15px"align=center bgcolor=#ffffff><table border=0 cellpadding=0 cellspacing=0 width=100% class=responsive-table style=max-width:500px><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class="message-content padding"style=padding:0;font-size:16px;line-height:25px;color:#232323><h2>New Contact Message</h2><div class=form-container>${htmlData}</div></table></table></table></table>`,
    };
};

const schema = z.object({
    email: z.string().email(),
    subject: z.string().min(3),
    message: z.string().min(3),
})

export async function createContactRequest(prevState: FormState, formData: FormData): Promise<FormState> {
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const data = { email, subject, message };

    const validatedFields = schema.safeParse(data);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            status: 'error',
            message: '❌ Given data is invalid, please check the form fields.',
            formData: data,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    try {
        const { text, html } = generateEmailContent({ subject, message, email });
        const mailRes = await sendMail('hoffmann.webdev@gmail.com', subject, text, html);
        return { status: 'success', message: '🎉 Thanks for your message, I will get back to you soon!', formData: data };
    } catch (err: any) {
        console.error('Error by sending mail with transporter:', err);
        return { status: 'error', message: '❌ Something went wrong, please try again later.', formData: data };
    }
};

type CustomFeed = {};

export const getBlogPosts = async () => {
    const parser = new Parser<CustomFeed, BlogPost>({
        customFields: {
            item: [
                ['dc:creator', 'author'],
                ['content:encoded', 'content']
            ],
        }
    });
    const feed = await parser.parseURL('https://medium.com/feed/@hoffmann.webdev');
    return feed.items;
};