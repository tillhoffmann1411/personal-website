import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { BlogPost } from '../../lib/definitions';
import { ArrowRight } from 'lucide-react';

const BlogCard: React.FC<BlogPost> = ({ link, title, content = '' }) => {
    return (
        <Card className='h-full flex flex-col'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>published on Medium</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 75)}...</p>
            </CardContent>
            <div className='flex-grow' />
            <CardFooter>
                <Button
                    asChild
                >
                    <Link href={link} aria-label="Go to GitHub profile of Till Hoffmann" target="_blank" rel="noreferrer">
                        Read more
                        <ArrowRight className='w-4 h-4 ml-2' />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;