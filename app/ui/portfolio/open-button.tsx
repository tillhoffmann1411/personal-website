type Props = {
    link: string;
    title: string;
};

const OpenButton: React.FC<Props> = ({ link, title }) => {
    return (
        <a href={link} className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 border-none mr-2 mb-1 hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-purple-200">
            {title}
        </a>
    );
};

export default OpenButton;