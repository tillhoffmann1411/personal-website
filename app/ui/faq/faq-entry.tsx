import { FC } from 'react';

type Props = {
    question: string;
    answer: React.ReactElement;
};

const FAQEntry: FC<Props> = ({ question, answer }) => {
    return (
        <div className="py-5">
            <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none text-gray-700 dark:text-gray-300">
                    <span>{question}</span>
                    <span className="transition group-open:rotate-180">
                        <svg
                            fill="none"
                            height="24"
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </span>
                </summary>
                <div className="text-gray-700 dark:text-gray-300 mt-3 px-2 mb-6">
                    {answer}
                </div>
            </details>
        </div>
    );
};

export default FAQEntry;