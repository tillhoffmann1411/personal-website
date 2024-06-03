'use client';
import { FC, useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IoIosPaperPlane } from 'react-icons/io';
import CologneMap from '../map/cologne-map';
import { createContactRequest } from '@/app/api/actions/actions';

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
        <section className="w-full py-24 lg:py-32" id="contact">
            <div className='container px-4 md:px-6'>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Kotakt
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Starte jetzt dein Projekt
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-center gap-12 py-12 grid-cols-1 md:grid-cols-2">
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
                        <Card className='overflow-hidden'>
                            <CologneMap zoom={12} />
                        </Card>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Contact;