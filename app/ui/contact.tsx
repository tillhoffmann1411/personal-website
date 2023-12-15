import { FC, FormEvent, useState } from 'react';
import { sendContactForm } from '../lib/api';

const initValues = {
    email: '',
    subject: '',
    message: '',
};
const initState = { values: initValues };

const Contact: FC = () => {
    const [state, setState] = useState(initState);
    const [feedbackMsg, setFeedbackMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { values } = state;

    const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => setState((prev) => (
        { ...prev, values: { ...prev.values, [e.currentTarget.id]: e.currentTarget.value } }
    ));

    const onSubmit = async (e: FormEvent) => {
        setIsLoading(true);
        e.preventDefault();
        const formData = state.values;
        try {
            const response = await sendContactForm(formData);
            if (!response.success) {
                setFeedbackMsg('❌ Something went wrong, please try again later.');
            } else {
                setFeedbackMsg('🎉 Thanks for your message, I will get back to you soon!');
                setState(initState);
                setTimeout(() => setFeedbackMsg(''), 6000);
            }
        } catch (err) {
            setFeedbackMsg('❌ Something went wrong, please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="" id="contact">
            <div className="py-6">
                <h2 className="dark:text-white">Contact</h2>
            </div>
            <div className="mx-auto">
                <p className="mb-8 text-gray-700 dark:text-gray-300">
                    Got a question? Want to collaborate? Need help for some project? Let me know.
                </p>
                <form className="space-y-8 p-4" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@email.com"
                            value={values.email}
                            onChange={onChange}
                            required
                        />

                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let me know how I can help you"
                            value={values.subject}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                            value={values.message}
                            onChange={onChange}
                            required
                        />
                    </div>

                    {feedbackMsg && (
                        <p className="text-sm text-gray-900 dark:text-gray-300">{feedbackMsg}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-full bg-black flex text-white px-4 py-2 border-none hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-purple-200"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;