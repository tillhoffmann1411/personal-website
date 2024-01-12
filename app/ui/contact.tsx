import { FC, useEffect, useRef } from 'react';
import { createContactRequest } from '../lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IoIosPaperPlane } from 'react-icons/io';
import CologneMap from '../../components/cologne-map';

const initialState = {
    email: '',
    subject: '',
    message: '',
};

const SubmitButton: FC = () => {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            aria-disabled={pending}
        >
            {pending ? 'Sending...' : 'Send message'}
            <IoIosPaperPlane className="ml-2 h-5 w-5" />
        </Button>
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
        <section className="mt-40" id="contact">
            <div className="py-6">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Contact
                </h2>
            </div>

            <div className='flex flex-col gap-4 md:flex-row'>

                <Card className="aspect-square md:w-full">
                    <CardHeader>
                        <CardTitle>
                            Contact me
                        </CardTitle>
                        <CardDescription>
                            Got a question? Want to collaborate? Need help for some project? Let me know.
                        </CardDescription>
                    </CardHeader>
                    <form action={formAction} ref={formRef}>
                        <CardContent className="space-y-8">

                            <div className='grid w-full items-center gap-1.5'>
                                <Label htmlFor="email">Your email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="name@email.com"
                                    aria-errormessage={formState.errors?.email?.join(' ')}
                                    required
                                />
                                {formState.errors?.email && (
                                    <p className="text-sm text-red-500">{formState.errors?.email?.join(' ')}</p>
                                )}
                            </div>

                            <div className='grid w-full items-center gap-1.5'>
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Let me know how I can help you"
                                    aria-errormessage={formState.errors?.subject?.join(' ')}
                                    required
                                />
                                {formState.errors?.subject && (
                                    <p className="text-sm text-red-500">{formState.errors?.subject?.join(' ')}</p>
                                )}
                            </div>

                            <div className='grid w-full gap-1.5'>
                                <Label htmlFor="message">
                                    Your message
                                </Label>
                                <Textarea
                                    id="message"
                                    rows={6}
                                    name="message"
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


                        </CardContent>
                        <CardFooter>
                            <SubmitButton />
                        </CardFooter>
                    </form>
                </Card>

                <div className='md:w-full'>
                    <CologneMap />
                </div>

            </div>

        </section>
    );
};

export default Contact;