import { BlogPost } from '../../lib/definitions';

const BlogCard: React.FC<BlogPost> = ({ link, title, content = '' }) => {
    return (
        <div className="flex flex-col h-full justify-between bg-gray-200 rounded-2xl dark:bg-gray-900">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {/* <img className="rounded-t-lg" src={thumbnail} alt="" /> */}
            </a>
            <div className="p-5 h-full flex flex-col place-content-between">
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <h4 className="mb-4 dark:text-white">{title}</h4>
                    </a>
                    <p className="mb-3 text-gray-700 dark:text-gray-300">{content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 75)}...</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 border-none self-start hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-purple-200">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;