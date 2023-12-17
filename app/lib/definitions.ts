import React from 'react';

export type Skill = {
    title: string;
    description: string;
    icon: React.ReactElement;
    logos: React.ReactElement[];
    color: string;
};

export type SkillCardProps = {
    icon: React.ReactElement;
    title: string;
    description: string;
    logos: React.ReactElement[];
    color: string;
};

export type FAQ = {
    question: string;
    answer: React.ReactElement;
};

export type Contact = {
    email: string;
    subject: string;
    message: string;
};

export type AboutMe = {
    title: string;
    description: React.ReactElement;
    function?: () => void;
};

export type Project = {
    title: string;
    description: string;
    imageSrc: any; // Replace 'any' with the specific type, e.g., string or a custom type if it's not a simple data type
    website: string;
    code: string;
    documentation: string;
    techStack: string[];
    bgColor: string;
    bgColorDark: string;
};

export type BlogPost = {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: any;
    categories: string[];
};

export type BlogData = {
    status: string;
    feed: {
        url: string;
        title: string;
        link: string;
        author: string;
        description: string;
        image: string;
    };
    items: BlogPost[];
};

export type ContactForm = {
    email: string;
    subject: string;
    message: string;
};

export type FormState = {
    status: string;
    message: string;
    formData: ContactForm;
    errors?: {
        email?: string[];
        subject?: string[];
        message?: string[];
    };
};