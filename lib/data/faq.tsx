import Link from 'next/link';

export const faqData = [
    {
        question: "How can I get in touch with you?",
        answer: (
            <span>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    You can reach out to me through the following methods:
                </p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                        <span className='font-extrabold'>Contact-Form</span>: Feel free to send me an email with the <Link href="#contact" className='underline hover:text-primary'>contact form</Link> on this website.
                    </li>
                    <li>
                        <span className='font-extrabold'>Social Media</span>: You can connect with me on{" "}
                        <Link
                            href="https://www.linkedin.com/in/tillhoffmann/"
                            className='underline hover:text-primary'
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </Link>{" "}where I actively engage with the tech community.
                    </li>
                </ul>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    I&apos;m always open to inquiries, collaborations, and discussions related
                    to technology, startups, or any other topic you&apos;d like to explore.
                    Looking forward to connecting with you!
                </p>
            </span>
        ),
    },
    {
        question:
            "Do you offer freelance services, and what type of services do you offer?",
        answer: (
            <div>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>My freelance services include:</p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-">
                    <li>Full-Stack Development in TypeScript, React, Node.js and Python</li>
                    <li>Knowledge graph design, planning, and implementation</li>
                    <li>Process optimization and automation</li>
                    <li>API Integration (JavaScript and Python)</li>
                </ul>
            </div>
        ),
    },
    {
        question: "Can you provide examples of your previous work or projects?",
        answer: (
            <p className='leading-7 [&:not(:first-child)]:mt-6'>
                You can explore a selection of my previous work and projects
                in my <Link href="#portfolio" className='underline hover:text-primary'>portfolio</Link>. If you have
                any specific inquiries about a particular project or would like more
                details, feel free to reach out, and I&apos;d be happy to provide additional
                information.
            </p>
        ),
    },
    // Weitere FAQ-Einträge hier
];