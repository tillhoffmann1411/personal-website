'use client';
import React, { useState, useEffect } from 'react';

type Props = {
    words: string[];
};

function Typewriter({ words }: Props) {
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const type = () => {
            const currentWord = words[i];
            if (isDeleting) {
                setText(currentWord.substring(0, j - 1));
                setJ(j - 1);
                if (j === 0) {
                    setIsDeleting(false);
                    setI((i + 1) % words.length);
                }
            } else {
                setText(currentWord.substring(0, j + 1));
                setJ(j + 1);
                if (j === currentWord.length) {
                    setIsDeleting(true);
                }
            }
        };
        const timeoutId = setTimeout(type, 100);
        return () => clearTimeout(timeoutId); // cleanup on unmount
    }, [i, j, isDeleting, words]);

    return <div>
        {text}
        <span className='animate-pulse'>|</span>
    </div>;
}

export default Typewriter;