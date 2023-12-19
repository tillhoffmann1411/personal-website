export const faqData = [
    {
        question: "How can I get in touch with you?",
        answer: (
            <span>
                You can reach out to me through the following methods:
                <br />
                <b>Contact-Form</b>: Feel free to send me an email with the <a href="#contact" className="text-purple-700 dark:text-purple-400">contact form</a> on this website.
                <br />
                <b>Social Media</b>: You can connect with me on{" "}
                <a
                    href="https://www.linkedin.com/in/tillhoffmann/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 dark:text-purple-400"
                >
                    LinkedIn
                </a>{" "}where I actively engage with the tech community.
                <br />
                <br />
                <p>
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
                <p>My freelance services include:</p>
                <ul className="list-inside list-disc">
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
            <p>
                You can explore a selection of my previous work and projects
                in my <a href="#portfolio" className="text-purple-700 dark:text-purple-400">portfolio</a>. If you have
                any specific inquiries about a particular project or would like more
                details, feel free to reach out, and I&apos;d be happy to provide additional
                information.
            </p>
        ),
    },
    // Weitere FAQ-Einträge hier
];