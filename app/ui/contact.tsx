import { FC, use, useEffect, useRef } from 'react';
import { createContactRequest } from '../lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
    email: '',
    subject: '',
    message: '',
};

const SubmitButton: FC = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            aria-disabled={pending}
            className="rounded-full bg-black flex text-white px-4 py-2 border-none hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-purple-200"
        >
            {pending ? 'Sending...' : 'Send message'}
        </button>
    );
};

const Contact: FC = () => {
    const [formState, formAction] = useFormState(createContactRequest, {
        status: '',
        message: '',
        errors: undefined,
        formData: initialState,
    });
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (formState.status === 'success') {
            formRef.current?.reset();
        }
    }, [formState.status]);

    return (
        <section className="" id="contact">
            <div className="py-6">
                <h2 className="dark:text-white">Contact</h2>
            </div>
            <div className="mx-auto">
                <p className="mb-8 text-gray-700 dark:text-gray-300">
                    Got a question? Want to collaborate? Need help for some project? Let me know.
                </p>
                <form className="space-y-8 p-4" action={formAction} ref={formRef}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@email.com"
                            aria-errormessage={formState.errors?.email?.join(' ')}
                            required
                        />
                        {formState.errors?.email && (
                            <p className="text-sm text-red-500">{formState.errors?.email?.join(' ')}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let me know how I can help you"
                            aria-errormessage={formState.errors?.subject?.join(' ')}
                            required
                        />
                        {formState.errors?.subject && (
                            <p className="text-sm text-red-500">{formState.errors?.subject?.join(' ')}</p>
                        )}
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
                            name="message"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                            aria-errormessage={formState.errors?.message?.join(' ')}
                            required
                        />
                        {formState.errors?.message && (
                            <p className="text-sm text-red-500">{formState.errors?.message?.join(' ')}</p>
                        )}
                    </div>

                    {formState.message && (
                        <div
                            className={`p-4 mb-4 text-sm rounded-lg dark:bg-gray-800
                                ${formState.status === 'success'
                                    ? 'text-green-800 bg-green-50 dark:text-green-400'
                                    : 'text-red-800 bg-red-50 dark:text-red-400'}
                            `}
                            role="alert"
                        >
                            {formState.message}
                        </div>
                    )}

                    <SubmitButton />

                </form>
            </div>
        </section>
    );
};

export default Contact;