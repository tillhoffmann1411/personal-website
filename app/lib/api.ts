import { Contact } from './definitions';

export const sendContactForm = async (values: Contact) => {
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    });
    const data = await res.json();
    return data;
}