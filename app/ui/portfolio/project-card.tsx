import { useState } from "react";
import Image from "next/image";
import OpenButton from './open-button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
        <Card className='flex flex-col h-full'>
            <AspectRatio ratio={16 / 9} className="rounded-t-lg">
                <a href={website || documentation || code || '#'}>
                    <Image fill src={imageSrc} alt={`${title} screenshot`} />
                </a>
            </AspectRatio>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {description && (
                    <p className="mb-3 text-gray-700 dark:text-gray-300">
                        {showMore ? description : `${description.substring(0, 75)}...`}
                        <button className="text-gray-600 dark:text-gray-400 text-xs" onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Show less' : 'Show more'}
                        </button>
                    </p>
                )}
            </CardContent>
            <div className='flex-grow' />
            <CardFooter className='gap-2'>
                {website && <OpenButton link={website} title="Website" />}
                {code && <OpenButton link={code} title="Code" />}
                {documentation && <OpenButton link={documentation} title="Page" />}
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;