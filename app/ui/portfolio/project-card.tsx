import { useState } from "react";
import Image from "next/image";
import OpenButton from './open-button';

type Props = {
    imageSrc: string;
    title: string;
    description: string;
    website?: string;
    code?: string;
    documentation?: string;
};

const ProjectCard: React.FC<Props> = ({ imageSrc, title, description, website, code, documentation }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="flex flex-col h-full justify-between bg-gray-200 rounded-2xl dark:bg-gray-900">
            <a href={website || documentation || code || '#'}>
                <Image className="rounded-t-lg" src={imageSrc} alt={`${title} screenshot`} />
            </a>
            <div className="p-5 h-full flex flex-col place-content-between">
                <div>
                    <a href="#">
                        <h4 className="mb-2 dark:text-white">{title}</h4>
                    </a>
                    {description && (
                        <p className="mb-3 text-gray-700 dark:text-gray-300">
                            {showMore ? description : `${description.substring(0, 75)}...`}
                            <button className="text-gray-600 dark:text-gray-400 text-xs" onClick={() => setShowMore(!showMore)}>
                                {showMore ? 'Show less' : 'Show more'}
                            </button>
                        </p>
                    )}
                </div>
                <div>
                    {website && <OpenButton link={website} title="Website" />}
                    {code && <OpenButton link={code} title="Code" />}
                    {documentation && <OpenButton link={documentation} title="Page" />}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;