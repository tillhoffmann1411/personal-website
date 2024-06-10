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
import { Headline2 } from '../ui/typography';

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
            {pending ? 'Senden...' : 'Abschicken'}
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
        <section id="offer">
            <div className="py-6 space-y-2">
                <Headline2>Kontakt</Headline2>
            </div>

                <div className="mx-auto grid max-w-5xl items-center gap-12 py-12 grid-cols-1 md:grid-cols-2">
                    <Card className="aspect-square md:w-full">
                        <CardHeader>
                            <CardTitle>
                                Kontakt
                            </CardTitle>
                            <CardDescription>
                                Wir finden gemeinsam die beste Lösung für dein Projekt.
                            </CardDescription>
                        </CardHeader>
                        <form action={formAction} ref={formRef}>
                            <CardContent className="space-y-8">

                                <div className='grid w-full items-center gap-1.5'>
                                    <Label htmlFor="email">Deine email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="max@email.com"
                                        aria-errormessage={formState.errors?.email?.join(' ')}
                                        required
                                    />
                                    {formState.errors?.email && (
                                        <p className="text-sm text-red-500">{formState.errors?.email?.join(' ')}</p>
                                    )}
                                </div>

                                <div className='grid w-full items-center gap-1.5'>
                                    <Label htmlFor="subject">Betreff</Label>
                                    <Input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Idee zur Umsetzung"
                                        aria-errormessage={formState.errors?.subject?.join(' ')}
                                        required
                                    />
                                    {formState.errors?.subject && (
                                        <p className="text-sm text-red-500">{formState.errors?.subject?.join(' ')}</p>
                                    )}
                                </div>

                                <div className='grid w-full gap-1.5'>
                                    <Label htmlFor="message">
                                        Deine Nachricht
                                    </Label>
                                    <Textarea
                                        id="message"
                                        rows={6}
                                        name="message"
                                        placeholder="Ich habe folgende Idee..."
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
        </section>
    );
};

export default Contact;