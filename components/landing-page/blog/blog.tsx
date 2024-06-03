'use client';
import React, { useEffect } from 'react';
import BlogCarousel from './blog-carousel';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getBlogPosts } from '@/app/api/actions/actions';
import { BlogPost } from '@/types/definitions';

const BlogFeed = () => {
    const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);

    useEffect(() => {
        const loadBlogPosts = async () => {
            const posts = await getBlogPosts();
            setBlogPosts(posts);
        };

        loadBlogPosts();
    }, []);

    return (
        <section className="mt-40" id="blog">
            <div className="py-6">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Blog
                </h2>
            </div>
            {blogPosts.length > 0
                ? (<BlogCarousel articles={blogPosts} />) : (
                    <Card className='h-full flex flex-col'>
                        <CardHeader>
                            <CardTitle>Checkout my Blog on Medium</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Here you can find topics I work on and much more.</p>
                        </CardContent>
                        <div className='flex-grow' />
                        <CardFooter>
                            <Button
                                asChild
                            >
                                <Link href="https://medium.com/@hoffmann.webdev" aria-label="Go to GitHub profile of Till Hoffmann" target="_blank" rel="noreferrer">
                                    Go to Blog
                                    <ArrowRight className='w-4 h-4 ml-2' />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                )}
        </section>
    )
};

export default BlogFeed;
